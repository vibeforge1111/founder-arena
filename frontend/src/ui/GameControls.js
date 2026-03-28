export class GameControls {
  constructor(container, store) {
    this.store = store;
    this.container = container;

    // Create modal overlay
    this._overlay = document.createElement('div');
    this._overlay.className = 'modal-overlay hidden';
    this._overlay.innerHTML = '<div class="modal" id="modal-content"></div>';
    this._modal = this._overlay.querySelector('#modal-content');
    container.appendChild(this._overlay);

    // Close on overlay click
    this._overlay.addEventListener('click', (e) => {
      if (e.target === this._overlay) this.close();
    });
  }

  open() {
    this._overlay.classList.remove('hidden');
  }

  close() {
    this._overlay.classList.add('hidden');
  }

  showCreateGame() {
    this._modal.innerHTML = `
      <h2>Create New Game</h2>
      <label>GAME NAME</label>
      <input type="text" id="cg-name" value="Founder Arena" />

      <label>GAME MODE</label>
      <select id="cg-mode">
        <option value="competitive_mode">Competitive (1v1 Duel)</option>
        <option value="legacy_arena">Legacy Arena (FFA)</option>
      </select>

      <label>MAX TURNS</label>
      <select id="cg-turns">
        <option value="32" selected>32 (Standard)</option>
        <option value="16">16 (Quick)</option>
        <option value="52">52 (Full Year)</option>
      </select>

      <label>BENCHMARK TIER</label>
      <select id="cg-tier">
        <option value="baseline">Baseline (Balanced)</option>
        <option value="pressure">Pressure (Aggressive)</option>
        <option value="discipline">Discipline (Lean)</option>
        <option value="wildcard">Wildcard (Chaos)</option>
        <option value="gauntlet">Gauntlet (All Strategies)</option>
      </select>

      <div class="modal-actions">
        <button class="btn-secondary" id="cg-cancel">Cancel</button>
        <button class="btn-primary" id="cg-create">Create & Launch</button>
      </div>
    `;
    this.open();

    this._modal.querySelector('#cg-cancel').addEventListener('click', () => this.close());
    this._modal.querySelector('#cg-create').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#cg-create');
      btn.textContent = 'Creating...';
      btn.disabled = true;

      try {
        const data = await this.store.createGame({
          name: this._modal.querySelector('#cg-name').value,
          gameMode: this._modal.querySelector('#cg-mode').value,
          maxTurns: parseInt(this._modal.querySelector('#cg-turns').value),
          benchmarkTier: this._modal.querySelector('#cg-tier').value,
        });
        this.close();
        // Automatically show lobby
        this.showLobby(data);
      } catch (e) {
        btn.textContent = 'Error - Retry';
        btn.disabled = false;
      }
    });
  }

  showLobby(gameData) {
    const gameId = this.store.state.gameId;
    const tier = gameData?.benchmark_tier || 'baseline';
    const joinCode = this.store.state.joinCode || '';

    this._modal.innerHTML = `
      <h2>Game Lobby</h2>
      <div style="font-size:10px;color:#888;margin-bottom:12px">
        Game ID: <strong style="color:#eee">${gameId}</strong>
        &middot; Join Code: <strong style="color:#eee">${joinCode}</strong>
      </div>

      <div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;margin-bottom:12px;background:rgba(255,255,255,0.02)">
        <div style="font-size:10px;font-weight:700;color:#A78BFA;letter-spacing:1px;margin-bottom:10px">DEPLOY YOUR AGENT</div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">AGENT NAME</label>
            <input type="text" id="da-agent-name" value="MyFounder" style="font-size:11px" />
          </div>
          <div>
            <label style="font-size:9px">STARTUP NAME</label>
            <input type="text" id="da-startup-name" value="NeuralForge" style="font-size:11px" />
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">SECTOR</label>
            <select id="da-sector" style="font-size:11px">
              <option value="ai">AI</option>
              <option value="fintech">Fintech</option>
              <option value="saas">SaaS</option>
              <option value="crypto">Crypto</option>
              <option value="healthtech">HealthTech</option>
              <option value="gaming">Gaming</option>
              <option value="edtech">EdTech</option>
              <option value="greentech">GreenTech</option>
            </select>
          </div>
          <div>
            <label style="font-size:9px">MOTTO</label>
            <input type="text" id="da-motto" value="Intelligence is our product" style="font-size:11px" />
          </div>
        </div>

        <label style="font-size:9px">SKILL.MD (Strategy Profile)</label>
        <textarea id="da-skill" rows="6" style="font-size:10px;font-family:'Courier New',monospace;line-height:1.4;resize:vertical" placeholder="# My Agent Strategy

primary_style: balanced
risk_posture: medium
decision_style: analytical
preferred_foci: product growth resilience

We believe in building reliable products with sustainable growth.
Quality over quantity. Trust is everything."># My Agent Strategy

primary_style: balanced
risk_posture: medium
decision_style: analytical
preferred_foci: product growth resilience

We believe in building reliable products with sustainable growth.
Quality over quantity. Trust is everything.</textarea>

        <div style="display:flex;gap:8px;margin-top:8px">
          <button class="btn-primary" id="da-deploy" style="background:#A78BFA;flex:1">Deploy Agent</button>
        </div>
        <div id="da-status" style="font-size:9px;margin-top:6px;min-height:14px"></div>
      </div>

      <div class="lobby-list" id="lobby-agents">
        <div style="font-size:10px;color:#555;padding:8px">Waiting for agents...</div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="lobby-cancel">Close</button>
        <button class="btn-primary" id="lobby-fill" style="background:#22C55E">Fill Bots & Start</button>
      </div>
    `;
    this.open();

    // Deploy agent handler
    this._modal.querySelector('#da-deploy').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#da-deploy');
      const status = this._modal.querySelector('#da-status');
      btn.textContent = 'Deploying...';
      btn.disabled = true;
      status.style.color = '#888';
      status.textContent = 'Joining game...';

      try {
        const skillMd = this._modal.querySelector('#da-skill').value.trim();
        const agentConfig = {
          agentName: this._modal.querySelector('#da-agent-name').value.trim() || 'MyFounder',
          startupName: this._modal.querySelector('#da-startup-name').value.trim() || 'NeuralForge',
          sector: this._modal.querySelector('#da-sector').value,
          motto: this._modal.querySelector('#da-motto').value.trim(),
          strategyDescription: skillMd,
        };

        const data = await this.store.joinAsPlayer(agentConfig);
        status.style.color = '#22C55E';
        status.textContent = `Deployed! Agent token: ${data.agent_token?.slice(0, 8)}...`;
        btn.textContent = 'Deployed';
        btn.style.background = '#22C55E';

        // Disable deploy section after success
        this._modal.querySelectorAll('#da-agent-name, #da-startup-name, #da-sector, #da-motto, #da-skill').forEach(el => {
          el.disabled = true;
          el.style.opacity = '0.5';
        });
      } catch (e) {
        status.style.color = '#EF4444';
        status.textContent = `Error: ${e.message}`;
        btn.textContent = 'Retry Deploy';
        btn.disabled = false;
      }
    });

    this._modal.querySelector('#lobby-cancel').addEventListener('click', () => this.close());
    this._modal.querySelector('#lobby-fill').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#lobby-fill');
      btn.textContent = 'Starting...';
      btn.disabled = true;

      try {
        await this.store.fillBotsAndStart(tier);
        setTimeout(() => this.close(), 1000);
      } catch (e) {
        btn.textContent = 'Error - Retry';
        btn.disabled = false;
      }
    });

    // Update lobby list from state
    this._lobbyUpdateInterval = setInterval(() => {
      const state = this.store.state;
      if (state.view !== 'lobby') {
        clearInterval(this._lobbyUpdateInterval);
        return;
      }
      const startups = state.gameData?.startups || {};
      const agentList = this._modal.querySelector('#lobby-agents');
      if (!agentList) return;

      const entries = Object.values(startups);
      if (entries.length === 0) return;

      agentList.innerHTML = entries.map(s => {
        const isMe = s.id === this.store.state.myStartupId ||
                     s.startup_name === this._modal.querySelector('#da-startup-name')?.value;
        return `
          <div class="lobby-agent" style="${isMe ? 'border-left:2px solid #A78BFA;padding-left:6px' : ''}">
            <div class="dot" style="background:${s.alive !== false ? '#22C55E' : '#EF4444'}"></div>
            <span style="font-weight:600">${s.startup_name || 'Unknown'}</span>
            ${isMe ? '<span style="color:#A78BFA;font-size:8px;margin-left:4px">YOU</span>' : ''}
            <span style="color:#666;margin-left:auto">${s.sector || ''}</span>
          </div>
        `;
      }).join('');
    }, 1000);
  }

  async quickPlayVsBots() {
    this._modal.innerHTML = `
      <h2 style="text-align:center">Quick Play vs Bots</h2>
      <div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;margin-bottom:12px;background:rgba(255,255,255,0.02)">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">YOUR AGENT NAME</label>
            <input type="text" id="qp-agent" value="MyFounder" style="font-size:11px" />
          </div>
          <div>
            <label style="font-size:9px">STARTUP NAME</label>
            <input type="text" id="qp-startup" value="NeuralForge" style="font-size:11px" />
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">SECTOR</label>
            <select id="qp-sector" style="font-size:11px">
              <option value="ai">AI</option>
              <option value="fintech">Fintech</option>
              <option value="saas">SaaS</option>
              <option value="crypto">Crypto</option>
              <option value="healthtech">HealthTech</option>
              <option value="gaming">Gaming</option>
              <option value="edtech">EdTech</option>
              <option value="greentech">GreenTech</option>
            </select>
          </div>
          <div>
            <label style="font-size:9px">BOT DIFFICULTY</label>
            <select id="qp-tier" style="font-size:11px">
              <option value="baseline">Baseline (Balanced)</option>
              <option value="pressure">Pressure (Aggressive)</option>
              <option value="discipline">Discipline (Lean)</option>
              <option value="gauntlet">Gauntlet (All Types)</option>
            </select>
          </div>
        </div>
        <label style="font-size:9px">SKILL.MD (Your Strategy)</label>
        <textarea id="qp-skill" rows="5" style="font-size:10px;font-family:'Courier New',monospace;line-height:1.4;resize:vertical">primary_style: balanced
risk_posture: medium
preferred_foci: product growth resilience

Build great products. Grow sustainably. Win.</textarea>
      </div>

      <div id="qp-progress" style="margin-bottom:12px">
        <div id="qp-step" style="font-size:10px;color:#888;text-align:center">Ready to launch</div>
        <div style="background:rgba(255,255,255,0.06);border-radius:4px;height:6px;margin-top:6px;overflow:hidden">
          <div id="qp-bar" style="height:100%;width:0%;background:#22C55E;border-radius:4px;transition:width 0.4s ease"></div>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="qp-cancel">Cancel</button>
        <button class="btn-primary" id="qp-go" style="background:#22C55E;flex:1">Launch Game</button>
      </div>
    `;
    this.open();

    this._modal.querySelector('#qp-cancel').addEventListener('click', () => this.close());
    this._modal.querySelector('#qp-go').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#qp-go');
      const step = this._modal.querySelector('#qp-step');
      const bar = this._modal.querySelector('#qp-bar');
      btn.disabled = true;
      btn.textContent = 'Launching...';

      try {
        // Step 1: Create game
        step.textContent = 'Creating game...';
        step.style.color = '#F0B429';
        bar.style.width = '20%';

        const tier = this._modal.querySelector('#qp-tier').value;
        const gameData = await this.store.createGame({
          name: 'Quick Play',
          gameMode: 'competitive_mode',
          maxTurns: 32,
          benchmarkTier: tier,
        });

        // Step 2: Deploy your agent
        step.textContent = 'Deploying your agent...';
        bar.style.width = '45%';

        await this.store.joinAsPlayer({
          agentName: this._modal.querySelector('#qp-agent').value.trim() || 'MyFounder',
          startupName: this._modal.querySelector('#qp-startup').value.trim() || 'NeuralForge',
          sector: this._modal.querySelector('#qp-sector').value,
          motto: 'Ready to compete',
          strategyDescription: this._modal.querySelector('#qp-skill').value.trim(),
        });

        // Step 3: Fill bots & start
        step.textContent = 'Filling bots & starting...';
        bar.style.width = '75%';

        await this.store.fillBotsAndStart(tier);

        // Step 4: Done
        step.textContent = 'Game started!';
        step.style.color = '#22C55E';
        bar.style.width = '100%';

        setTimeout(() => this.close(), 800);

      } catch (e) {
        step.textContent = `Error: ${e.message}`;
        step.style.color = '#EF4444';
        btn.textContent = 'Retry';
        btn.disabled = false;
      }
    });
  }

  showJoinExisting() {
    this._modal.innerHTML = `
      <h2>Watch Existing Game</h2>
      <label>GAME ID</label>
      <input type="text" id="je-id" placeholder="Enter game ID" />
      <label>SPECTATOR TOKEN</label>
      <input type="text" id="je-token" placeholder="Enter spectator token" />

      <div class="modal-actions">
        <button class="btn-secondary" id="je-cancel">Cancel</button>
        <button class="btn-primary" id="je-watch">Watch Game</button>
      </div>
    `;
    this.open();

    this._modal.querySelector('#je-cancel').addEventListener('click', () => this.close());
    this._modal.querySelector('#je-watch').addEventListener('click', () => {
      const gameId = this._modal.querySelector('#je-id').value.trim();
      const token = this._modal.querySelector('#je-token').value.trim();
      if (gameId) {
        this.store.watchGame(gameId, token || null);
        this.close();
      }
    });
  }

  showPostGame() {
    const gameData = this.store.state.gameData;
    if (!gameData) return;

    const startups = gameData.startups || {};
    const sorted = Object.entries(startups)
      .map(([id, s]) => ({ id, ...s }))
      .sort((a, b) => (b.valuation || 0) - (a.valuation || 0));

    const winner = sorted[0];
    const podium = sorted.slice(0, 3);

    this._modal.innerHTML = `
      <h2 style="text-align:center">Game Over</h2>
      <div style="text-align:center;margin:16px 0">
        <div style="font-size:24px;font-weight:800;color:#F0B429">${winner?.startup_name || 'Unknown'}</div>
        <div style="font-size:11px;color:#888;margin-top:4px">Winner - ${winner?.agent_name || ''}</div>
      </div>

      <div style="margin:16px 0">
        ${podium.map((s, i) => {
          const medals = ['#F0B429', '#94A3B8', '#CD7F32'];
          const labels = ['1st', '2nd', '3rd'];
          return `
            <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;margin-bottom:4px;
                        background:rgba(255,255,255,0.03);border-radius:8px">
              <div style="font-size:14px;font-weight:800;color:${medals[i]};width:30px">${labels[i]}</div>
              <div style="flex:1">
                <div style="font-size:11px;font-weight:600">${s.startup_name}</div>
                <div style="font-size:9px;color:#666">${s.agent_name} &middot; ${s.sector}</div>
              </div>
              <div style="font-size:12px;font-weight:700;color:#F0B429">${formatMoneySimple(s.valuation)}</div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="pg-close">Close</button>
        <button class="btn-primary" id="pg-new">New Game</button>
      </div>
    `;
    this.open();

    this._modal.querySelector('#pg-close').addEventListener('click', () => this.close());
    this._modal.querySelector('#pg-new').addEventListener('click', () => {
      this.close();
      this.showCreateGame();
    });
  }
}

function formatMoneySimple(value) {
  if (value == null) return '$0';
  const num = Number(value);
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
  return `$${num.toFixed(0)}`;
}
