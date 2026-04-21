import { formatScore } from '../utils/formatters.js';
import { isCompetitiveMode, rankedStartups, startupScore } from '../utils/rankings.js';

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
    if (this._lobbyUpdateInterval) {
      clearInterval(this._lobbyUpdateInterval);
      this._lobbyUpdateInterval = null;
    }
  }

  _quoteArg(value) {
    return `"${String(value ?? '').replace(/"/g, '\\"')}"`;
  }

  _exampleAgentCommand(config) {
    return [
      'python example_agent.py',
      `--game-id ${this._quoteArg(this.store.state.gameId)}`,
      `--agent-token ${this._quoteArg(config.agentToken)}`,
      `--startup-id ${this._quoteArg(config.startupId)}`,
      `--name ${this._quoteArg(config.agentName)}`,
      `--startup ${this._quoteArg(config.startupName)}`,
      `--sector ${this._quoteArg(config.sector)}`,
      `--motto ${this._quoteArg(config.motto || '')}`,
      `--strategy ${this._quoteArg(config.strategy || 'balanced')}`,
      `--server ${this._quoteArg(window.location.origin)}`,
    ].join(' ');
  }

  _showAttachCommand(command) {
    const wrap = this._modal.querySelector('#da-command-wrap');
    const code = this._modal.querySelector('#da-command');
    if (!wrap || !code) return;
    wrap.style.display = 'block';
    code.textContent = command;
  }

  _runnerToneColor(tone) {
    return {
      positive: '#22C55E',
      warning: '#F59E0B',
      danger: '#EF4444',
      neutral: '#94A3B8',
      info: '#22D3EE',
    }[tone] || '#94A3B8';
  }

  _formatHeartbeatAge(ageSeconds) {
    if (ageSeconds == null) return 'No heartbeat yet';
    if (ageSeconds <= 1) return 'Heartbeat just now';
    if (ageSeconds < 60) return `Heartbeat ${ageSeconds}s ago`;
    const minutes = Math.round(ageSeconds / 60);
    return `Heartbeat ${minutes}m ago`;
  }

  _fallbackRunnerPresence() {
    return {
      status: 'reserved',
      label: 'Slot reserved',
      tone: 'neutral',
      detail: 'No local runner has attached to this startup yet.',
      heartbeat_age_seconds: null,
    };
  }

  _renderRunnerPresence(presence, { compact = false } = {}) {
    const runner = presence || this._fallbackRunnerPresence();
    const color = this._runnerToneColor(runner.tone);
    const ageLabel = this._formatHeartbeatAge(runner.heartbeat_age_seconds);
    if (compact) {
      return `
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
          <span style="display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border-radius:999px;background:${color}1A;border:1px solid ${color}33;color:${color};font-size:8px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase">${runner.label}</span>
          <span style="font-size:8px;color:var(--text-muted)">${ageLabel}</span>
        </div>
      `;
    }
    return `
      <div style="display:flex;flex-direction:column;gap:6px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span style="display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:999px;background:${color}1A;border:1px solid ${color}33;color:${color};font-size:8px;font-weight:800;letter-spacing:0.6px;text-transform:uppercase">${runner.label}</span>
          <span style="font-size:9px;color:var(--text-muted)">${ageLabel}</span>
        </div>
        <div style="font-size:10px;color:var(--text);line-height:1.5">${runner.detail || ''}</div>
      </div>
    `;
  }

  _renderRunnerFailure(failure, { compact = false } = {}) {
    if (!failure) return '';
    const tone = {
      error: 'danger',
      warn: 'warning',
      info: 'info',
    }[failure.severity] || 'neutral';
    const color = this._runnerToneColor(tone);
    const label = failure.label || 'Runner issue';
    const message = failure.message || failure.headline || '';
    if (compact) {
      return `
        <div style="font-size:8px;color:${color};line-height:1.45;margin-top:4px">
          <strong style="font-weight:800">${label}:</strong> ${message}
        </div>
      `;
    }
    return `
      <div style="margin-top:8px;padding:10px 12px;border-radius:10px;background:${color}12;border:1px solid ${color}26">
        <div style="font-size:8px;color:${color};font-weight:800;letter-spacing:0.6px;text-transform:uppercase">${label}</div>
        <div style="font-size:10px;color:var(--text);line-height:1.5;margin-top:5px">${message}</div>
      </div>
    `;
  }

  _renderRunnerIncidents(summary) {
    const incidents = summary?.runner_incidents || [];
    if (!incidents.length) return '';
    return `
      <div style="padding:12px 14px;border-radius:12px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.14);margin-bottom:10px">
        <div style="font-size:9px;color:#F87171;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:8px">Runner Issues</div>
        ${incidents.map((incident) => `
          <div style="padding:8px 0${incident !== incidents[incidents.length - 1] ? ';border-bottom:1px solid rgba(255,255,255,0.06)' : ''}">
            <div style="font-size:10px;color:var(--text);font-weight:700">${incident.startup_name}</div>
            <div style="font-size:9px;color:#FCA5A5;line-height:1.5;margin-top:4px">${incident.label}: ${incident.message}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  showCreateGame() {
    this._modal.innerHTML = `
      <h2>Create New Game</h2>

      <div class="game-card">
        <div class="game-card-title" style="color:#4A9EFF">Game Settings</div>
        <label>GAME NAME</label>
        <input type="text" id="cg-name" value="Founder Arena" />

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>GAME MODE</label>
            <select id="cg-mode">
              <option value="competitive_mode">Competitive (1v1 Duel)</option>
              <option value="legacy_arena">Legacy Arena (FFA)</option>
            </select>
          </div>
          <div>
            <label>MAX TURNS</label>
            <select id="cg-turns">
              <option value="32" selected>32 (Standard)</option>
              <option value="16">16 (Quick)</option>
              <option value="52">52 (Full Year)</option>
            </select>
          </div>
        </div>

        <label>BENCHMARK TIER</label>
        <select id="cg-tier">
          <option value="baseline">Baseline (Balanced)</option>
          <option value="pressure">Pressure (Aggressive)</option>
          <option value="discipline">Discipline (Lean)</option>
          <option value="wildcard">Wildcard (Chaos)</option>
          <option value="gauntlet">Gauntlet (All Strategies)</option>
        </select>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="cg-cancel">Cancel</button>
        <button class="btn-game btn-game-blue" id="cg-create" style="flex:2">Create & Launch</button>
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

  showLobby(gameData, defaults = {}, reservation = null) {
    const gameId = this.store.state.gameId;
    const tier = gameData?.benchmark_tier || 'baseline';
    const joinCode = this.store.state.joinCode || '';
    const defaultAgentName = defaults.agentName || 'MyFounder';
    const defaultStartupName = defaults.startupName || 'NeuralForge';
    const defaultSector = defaults.sector || 'ai';
    const defaultMotto = defaults.motto || 'Intelligence is our product';
    const defaultStrategy = defaults.strategy || 'balanced';

    this._modal.innerHTML = `
      <h2>Game Lobby</h2>
      <div style="display:flex;gap:8px;margin-bottom:14px">
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:8px 12px">
          <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;font-weight:600">GAME ID</div>
          <div style="font-size:11px;font-weight:700;margin-top:2px">${gameId}</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:8px 12px">
          <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;font-weight:600">JOIN CODE</div>
          <div style="font-size:11px;font-weight:700;margin-top:2px;color:#FFB800">${joinCode}</div>
        </div>
      </div>

      <div class="game-card">
        <div class="game-card-title" style="color:#A78BFA">Reserve Your Startup Slot</div>
        <div style="font-size:9px;color:var(--text-muted);line-height:1.5;margin-bottom:10px">
          The browser reserves a startup slot and gives you an attach command. It does not run an autonomous agent loop by itself.
          After reserving your slot, run the command below in a terminal, then click <strong>Fill Bots & Start</strong>.
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">AGENT NAME</label>
            <input type="text" id="da-agent-name" value="${defaultAgentName}" style="font-size:11px" />
          </div>
          <div>
            <label style="font-size:9px">STARTUP NAME</label>
            <input type="text" id="da-startup-name" value="${defaultStartupName}" style="font-size:11px" />
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">SECTOR</label>
            <select id="da-sector" style="font-size:11px">
              <option value="ai" ${defaultSector === 'ai' ? 'selected' : ''}>AI</option>
              <option value="fintech" ${defaultSector === 'fintech' ? 'selected' : ''}>Fintech</option>
              <option value="saas" ${defaultSector === 'saas' ? 'selected' : ''}>SaaS</option>
              <option value="crypto" ${defaultSector === 'crypto' ? 'selected' : ''}>Crypto</option>
              <option value="healthtech" ${defaultSector === 'healthtech' ? 'selected' : ''}>HealthTech</option>
              <option value="gaming" ${defaultSector === 'gaming' ? 'selected' : ''}>Gaming</option>
              <option value="edtech" ${defaultSector === 'edtech' ? 'selected' : ''}>EdTech</option>
              <option value="greentech" ${defaultSector === 'greentech' ? 'selected' : ''}>GreenTech</option>
            </select>
          </div>
          <div>
            <label style="font-size:9px">MOTTO</label>
            <input type="text" id="da-motto" value="${defaultMotto}" style="font-size:11px" />
          </div>
        </div>

        <label style="font-size:9px">LOCAL RUNNER STRATEGY</label>
        <select id="da-strategy" style="font-size:11px">
          <option value="balanced" ${defaultStrategy === 'balanced' ? 'selected' : ''}>Balanced</option>
          <option value="aggressive" ${defaultStrategy === 'aggressive' ? 'selected' : ''}>Aggressive</option>
          <option value="lean" ${defaultStrategy === 'lean' ? 'selected' : ''}>Lean</option>
          <option value="chaos" ${defaultStrategy === 'chaos' ? 'selected' : ''}>Chaos</option>
        </select>
        <div style="font-size:9px;color:var(--text-muted);line-height:1.45;margin-top:8px">
          For advanced local agents, ignore the example runner and use the same <code>game_id</code> and <code>agent_token</code> with your own `/api/games/{id}/state` + `/api/games/{id}/action` loop.
        </div>

        <div id="da-command-wrap" style="display:${reservation ? 'block' : 'none'};margin-top:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:10px 12px">
          <div style="font-size:9px;color:var(--text-muted);letter-spacing:0.7px;font-weight:700;margin-bottom:6px">TERMINAL ATTACH COMMAND</div>
          <pre id="da-command" style="white-space:pre-wrap;word-break:break-word;font-size:10px;line-height:1.45;color:var(--text);margin:0"></pre>
        </div>

        <div id="da-runner-wrap" style="display:${reservation ? 'block' : 'none'};margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:10px 12px">
          <div style="font-size:9px;color:var(--text-muted);letter-spacing:0.7px;font-weight:700;margin-bottom:6px">LOCAL RUNNER STATUS</div>
          <div id="da-runner-presence" style="font-size:10px;color:var(--text)">${this._renderRunnerPresence(this._fallbackRunnerPresence())}</div>
          <div id="da-runner-failure"></div>
        </div>

        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn-game btn-game-purple" id="da-deploy" style="flex:1;padding:10px">${reservation ? 'Slot Reserved' : 'Reserve Slot'}</button>
        </div>
        <div id="da-status" style="font-size:9px;margin-top:6px;min-height:14px"></div>
      </div>

      <div class="lobby-list" id="lobby-agents">
        <div style="font-size:10px;color:var(--text-muted);padding:10px;text-align:center">Waiting for agents...</div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="lobby-cancel">Close</button>
        <button class="btn-game btn-game-green" id="lobby-fill" style="flex:2">Fill Bots & Start</button>
      </div>
    `;
    this.open();

    if (reservation) {
      const command = this._exampleAgentCommand({
        agentName: defaultAgentName,
        startupName: defaultStartupName,
        sector: defaultSector,
        motto: defaultMotto,
        strategy: defaultStrategy,
        agentToken: reservation.agent_token,
        startupId: reservation.startup_id,
      });
      this._showAttachCommand(command);
      this._modal.querySelectorAll('#da-agent-name, #da-startup-name, #da-sector, #da-motto, #da-strategy').forEach(el => {
        el.disabled = true;
        el.style.opacity = '0.5';
      });
      const deployButton = this._modal.querySelector('#da-deploy');
      const status = this._modal.querySelector('#da-status');
      if (deployButton) {
        deployButton.disabled = true;
        deployButton.style.background = '#22C55E';
      }
      if (status) {
        status.style.color = '#22C55E';
        status.textContent = 'Slot reserved. Start your local runner before starting the match.';
      }
    }

    // Deploy agent handler
    this._modal.querySelector('#da-deploy').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#da-deploy');
      const status = this._modal.querySelector('#da-status');
      btn.textContent = 'Reserving...';
      btn.disabled = true;
      status.style.color = '#888';
      status.textContent = 'Reserving startup slot...';

      try {
        const agentConfig = {
          agentName: this._modal.querySelector('#da-agent-name').value.trim() || 'MyFounder',
          startupName: this._modal.querySelector('#da-startup-name').value.trim() || 'NeuralForge',
          sector: this._modal.querySelector('#da-sector').value,
          motto: this._modal.querySelector('#da-motto').value.trim(),
          strategyDescription: this._modal.querySelector('#da-strategy').value,
        };

        const data = await this.store.joinAsPlayer(agentConfig);
        const command = this._exampleAgentCommand({
          ...agentConfig,
          strategy: this._modal.querySelector('#da-strategy').value,
          agentToken: data.agent_token,
          startupId: data.startup_id,
        });
        status.style.color = '#22C55E';
        status.textContent = 'Slot reserved. Run the terminal command, then start the match.';
        btn.textContent = 'Slot Reserved';
        btn.style.background = '#22C55E';
        this._showAttachCommand(command);
        const runnerWrap = this._modal.querySelector('#da-runner-wrap');
        const runnerPresence = this._modal.querySelector('#da-runner-presence');
        if (runnerWrap) runnerWrap.style.display = 'block';
        if (runnerPresence) runnerPresence.innerHTML = this._renderRunnerPresence(this._fallbackRunnerPresence());

        // Disable deploy section after success
        this._modal.querySelectorAll('#da-agent-name, #da-startup-name, #da-sector, #da-motto, #da-strategy').forEach(el => {
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
        this._lobbyUpdateInterval = null;
        return;
      }
      const startups = state.gameData?.startups || {};
      const agentList = this._modal.querySelector('#lobby-agents');
      const runnerPresenceCard = this._modal.querySelector('#da-runner-presence');
      const runnerFailureCard = this._modal.querySelector('#da-runner-failure');
      if (!agentList) return;

      const entries = Object.values(startups);
      const myStartupName = this._modal.querySelector('#da-startup-name')?.value;
      const myEntry = entries.find((s) => (
        s.id === this.store.state.myStartupId ||
        s.startup_name === myStartupName
      ));

      if (runnerPresenceCard) {
        runnerPresenceCard.innerHTML = this._renderRunnerPresence(myEntry?.runner_presence || this._fallbackRunnerPresence());
      }
      if (runnerFailureCard) {
        runnerFailureCard.innerHTML = this._renderRunnerFailure(myEntry?.runner_failure || null);
      }

      if (entries.length === 0) {
        agentList.innerHTML = '<div style="font-size:10px;color:var(--text-muted);padding:10px;text-align:center">Waiting for agents...</div>';
        return;
      }

      agentList.innerHTML = entries.map(s => {
        const isMe = s.id === this.store.state.myStartupId || s.startup_name === myStartupName;
        const runnerPresence = s.runner_presence || this._fallbackRunnerPresence();
        const runnerFailure = s.runner_failure || null;
        return `
          <div class="lobby-agent" style="align-items:flex-start;${isMe ? 'border-left:2px solid #A78BFA;padding-left:6px' : ''}">
            <div style="display:flex;flex-direction:column;gap:4px;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                <span style="font-weight:600">${s.startup_name || 'Unknown'}</span>
                ${isMe ? '<span style="color:#A78BFA;font-size:8px">YOU</span>' : ''}
                <span style="color:#666;font-size:8px;text-transform:uppercase;letter-spacing:0.5px">${s.sector || ''}</span>
              </div>
              <div style="font-size:8px;color:var(--text-muted)">${runnerPresence.detail || ''}</div>
              ${this._renderRunnerFailure(runnerFailure, { compact: true })}
            </div>
            <div style="margin-left:auto">
              ${this._renderRunnerPresence(runnerPresence, { compact: true })}
            </div>
          </div>
        `;
      }).join('');
    }, 1000);
  }

  async quickPlayVsBots() {
    this._modal.innerHTML = `
      <h2 style="text-align:center">Practice Lobby</h2>

      <div class="game-card">
        <div class="game-card-title" style="color:#34D058">Reserve Your Slot</div>
        <div style="font-size:9px;color:var(--text-muted);line-height:1.5;margin-bottom:10px">
          This flow creates a local practice duel and reserves your startup slot. It does not auto-run your agent.
          After setup, Founder Arena will give you a terminal attach command.
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">YOUR AGENT NAME</label>
            <input type="text" id="qp-agent" value="MyFounder" style="font-size:11px" />
          </div>
          <div>
            <label style="font-size:9px">STARTUP NAME</label>
            <input type="text" id="qp-startup" value="NeuralForge" style="font-size:11px" />
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
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
        <label style="font-size:9px">LOCAL RUNNER STRATEGY</label>
        <select id="qp-strategy" style="font-size:11px">
          <option value="balanced">Balanced</option>
          <option value="aggressive">Aggressive</option>
          <option value="lean">Lean</option>
          <option value="chaos">Chaos</option>
        </select>
      </div>

      <div id="qp-progress" style="margin-bottom:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:12px">
        <div id="qp-step" style="font-size:10px;color:var(--text-muted);text-align:center;font-weight:600">Ready to launch</div>
        <div class="progress-bar-track" style="margin-top:8px">
          <div id="qp-bar" class="progress-bar-fill" style="width:0%"></div>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="qp-cancel">Cancel</button>
        <button class="btn-game btn-game-green" id="qp-go" style="flex:2">&#9654; Create Practice Lobby</button>
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
        step.textContent = 'Creating practice lobby...';
        step.style.color = '#F0B429';
        bar.style.width = '20%';

        const tier = this._modal.querySelector('#qp-tier').value;
        const gameData = await this.store.createGame({
          name: 'Quick Play',
          gameMode: 'competitive_mode',
          maxTurns: 32,
          benchmarkTier: tier,
        });

        // Step 2: Reserve your slot
        step.textContent = 'Reserving your startup slot...';
        bar.style.width = '45%';

        const defaults = {
          agentName: this._modal.querySelector('#qp-agent').value.trim() || 'MyFounder',
          startupName: this._modal.querySelector('#qp-startup').value.trim() || 'NeuralForge',
          sector: this._modal.querySelector('#qp-sector').value,
          motto: 'Ready to compete',
          strategy: this._modal.querySelector('#qp-strategy').value,
        };
        const reservation = await this.store.joinAsPlayer({
          agentName: defaults.agentName,
          startupName: defaults.startupName,
          sector: defaults.sector,
          motto: defaults.motto,
          strategyDescription: defaults.strategy,
        });

        // Step 3: Handoff to lobby
        step.textContent = 'Practice lobby ready.';
        step.style.color = '#22C55E';
        bar.style.width = '100%';

        setTimeout(() => {
          this.close();
          this.showLobby(gameData, defaults, reservation);
        }, 500);

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
      <div class="game-card">
        <div class="game-card-title" style="color:#22D3EE">Spectator Mode</div>
        <label>GAME ID</label>
        <input type="text" id="je-id" placeholder="Enter game ID" />
        <label>SPECTATOR TOKEN</label>
        <input type="text" id="je-token" placeholder="Enter spectator token" />
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="je-cancel">Cancel</button>
        <button class="btn-clean" id="je-watch" style="flex:2;border-color:rgba(34,211,238,0.3);color:#22D3EE">&#128065; Watch Game</button>
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

  _renderTurningPoints(summary) {
    const turningPoints = summary?.turning_points || [];
    if (turningPoints.length === 0) {
      return '<div style="font-size:10px;color:var(--text-muted)">No replay turning points were recorded for this match.</div>';
    }

    return turningPoints.map((point, index) => {
      const leaderPlan = point.leader_decision?.intent || point.leader_actions?.join(', ') || 'No public plan recorded.';
      const challengerPlan = point.challenger_decision?.intent || point.challenger_actions?.join(', ') || 'No challenger plan recorded.';
      const swingLabel = point.leader_changed ? 'Lead Change' : `${point.gap_change >= 0 ? '+' : ''}${formatScore(point.gap_change)} gap swing`;
      return `
        <div style="padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:9px;color:#A78BFA;font-weight:800;text-transform:uppercase;letter-spacing:0.8px">Turning Point ${index + 1}</div>
            <div style="font-size:8px;color:#22D3EE;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:999px;padding:3px 8px">${swingLabel}</div>
            <div style="margin-left:auto;font-size:9px;color:var(--text-muted)">Week ${point.turn}</div>
          </div>
          <div style="font-size:12px;font-weight:800;color:var(--text);margin-top:8px">${point.headline}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
            <div style="background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.14);border-radius:10px;padding:10px">
              <div style="font-size:8px;color:#A78BFA;font-weight:700;letter-spacing:0.7px;text-transform:uppercase">${point.leader_startup}</div>
              <div style="font-size:10px;color:var(--text);line-height:1.45;margin-top:6px">${leaderPlan}</div>
              <div style="font-size:9px;color:var(--text-muted);margin-top:8px">${formatScore(point.leader_score)} score</div>
            </div>
            <div style="background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.14);border-radius:10px;padding:10px">
              <div style="font-size:8px;color:#22D3EE;font-weight:700;letter-spacing:0.7px;text-transform:uppercase">${point.challenger_startup}</div>
              <div style="font-size:10px;color:var(--text);line-height:1.45;margin-top:6px">${challengerPlan}</div>
              <div style="font-size:9px;color:var(--text-muted);margin-top:8px">${formatScore(point.challenger_score)} score</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  _renderOutcomeCards(summary, sorted) {
    const outcomes = summary?.startup_outcomes || {};
    const losers = sorted
      .slice(1, 3)
      .map((startup) => ({ startup, outcome: outcomes[startup.id] }))
      .filter(({ outcome }) => outcome);

    if (losers.length === 0) {
      return '';
    }

    return losers.map(({ startup, outcome }) => {
      const runnerFailure = outcome.runner_failure || null;
      const strengths = (outcome.strengths || []).map((item) => item.label).join(' · ');
      const gaps = (outcome.gaps || []).map((item) => item.label).join(' · ');
      return `
        <div style="padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:10px;font-weight:800;color:var(--text)">${startup.startup_name}</div>
            <div style="font-size:8px;color:#FB923C;border:1px solid rgba(251,146,60,0.18);background:rgba(251,146,60,0.08);border-radius:999px;padding:3px 8px">${outcome.result.replace(/_/g, ' ')}</div>
          </div>
          <div style="font-size:10px;color:var(--text-dim);line-height:1.5;margin-top:8px">${outcome.headline}</div>
          ${runnerFailure ? this._renderRunnerFailure(runnerFailure) : ''}
          ${strengths ? `<div style="font-size:9px;color:#22C55E;margin-top:8px">Held up on: ${strengths}</div>` : ''}
          ${gaps ? `<div style="font-size:9px;color:#EF4444;margin-top:4px">Lost on: ${gaps}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  _buildReplayRecapText(summary, sorted, competitive) {
    const winner = sorted[0];
    const shareUrl = this.store.getShareUrl();
    const turningPoints = (summary?.turning_points || [])
      .map((point, index) => `${index + 1}. ${point.headline}`)
      .join('\n');
    const runnerIncidents = (summary?.runner_incidents || [])
      .map((incident) => `- ${incident.startup_name}: ${incident.label} - ${incident.message}`)
      .join('\n');
    const loserRecaps = sorted
      .slice(1, 3)
      .map((startup) => {
        const outcome = summary?.startup_outcomes?.[startup.id];
        if (!outcome) return null;
        return `- ${startup.startup_name}: ${outcome.runner_failure?.headline || outcome.headline}`;
      })
      .filter(Boolean)
      .join('\n');

    return [
      `${summary?.winner_summary || `${winner?.startup_name || 'Unknown'} won the match.`}`,
      competitive && winner ? `Winner score: ${formatScore(startupScore(winner))}` : null,
      shareUrl ? `Replay: ${shareUrl}` : null,
      summary?.practice_takeaway?.headline ? `Practice takeaway: ${summary.practice_takeaway.headline}` : null,
      runnerIncidents ? `Runner issues:\n${runnerIncidents}` : null,
      turningPoints ? `Turning points:\n${turningPoints}` : null,
      loserRecaps ? `Why they lost:\n${loserRecaps}` : null,
    ].filter(Boolean).join('\n\n');
  }

  _buildSharePackage(summary, sorted, competitive) {
    const winner = sorted[0];
    const runnerUp = sorted[1];
    const topTurningPoint = (summary?.turning_points || [])[0];
    const topRunnerIssue = (summary?.runner_incidents || [])[0];
    const topLoser = sorted
      .slice(1, 3)
      .map((startup) => summary?.startup_outcomes?.[startup.id] ? { startup, outcome: summary.startup_outcomes[startup.id] } : null)
      .find(Boolean);
    const shareUrl = this.store.getShareUrl();

    const headline = competitive
      ? `${winner?.startup_name || 'Unknown'} beat ${runnerUp?.startup_name || 'the field'} by ${summary?.final_margin != null ? `${formatScore(summary.final_margin)} score` : 'a narrow margin'}`
      : `${winner?.startup_name || 'Unknown'} won Founder Arena`;

    const captionParts = [
      summary?.winner_summary || headline,
      topTurningPoint?.headline ? `Turning point: ${topTurningPoint.headline}` : null,
      topRunnerIssue?.headline ? `Runner issue: ${topRunnerIssue.headline}` : null,
      topLoser?.outcome ? `Why they lost: ${topLoser.outcome.runner_failure?.headline || topLoser.outcome.headline}` : null,
      summary?.practice_takeaway?.headline ? `Practice takeaway: ${summary.practice_takeaway.headline}` : null,
      shareUrl || null,
    ].filter(Boolean);

    return {
      headline,
      caption: captionParts.join('\n'),
    };
  }

  showPostGame(options = {}) {
    const gameData = this.store.state.gameData;
    if (!gameData) return;

    const competitive = isCompetitiveMode(gameData);
    const sorted = rankedStartups(gameData);
    const summary = gameData.summary || {};
    const shareUrl = this.store.getShareUrl();
    const sharePackage = this._buildSharePackage(summary, sorted, competitive);
    const entryMode = options.entryMode || null;
    const isSharedReplay = entryMode === 'sharedReplay';

    const winner = sorted[0];
    const podium = sorted.slice(0, 3);
    const winnerHeadline = competitive
      ? `${formatScore(startupScore(winner))} score`
      : formatMoneySimple(winner?.valuation);
    const winnerSubhead = competitive ? `${formatMoneySimple(winner?.valuation)} valuation` : `${winner?.sector || ''}`;

    this._modal.innerHTML = `
      <h2 style="text-align:center">${isSharedReplay ? 'Replay Recap' : 'Game Over'}</h2>

      ${isSharedReplay ? `
        <div style="margin:0 0 16px;padding:12px 14px;border-radius:14px;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.18)">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;border:1px solid rgba(34,211,238,0.22);background:rgba(34,211,238,0.1);border-radius:999px;padding:4px 8px">Shared Replay</div>
            <div style="font-size:9px;color:var(--text-muted)">${gameData.name || 'Founder Arena'} &middot; ${gameData.queue || 'showmatch'} &middot; ${gameData.benchmark_tier || 'baseline'}</div>
          </div>
          <div style="font-size:11px;color:var(--text);font-weight:800;line-height:1.5;margin-top:8px">${summary?.winner_summary || 'Replay summary is loading.'}</div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">This replay link opens directly into the creator recap with winner, turning points, and copy-ready share assets.</div>
        </div>
      ` : ''}

      <div style="text-align:center;margin:20px 0;padding:20px;background:linear-gradient(180deg,rgba(255,184,0,0.08) 0%,rgba(255,184,0,0.02) 100%);border:1px solid rgba(255,184,0,0.15);border-radius:16px">
        <div style="font-size:28px;margin-bottom:6px">&#128081;</div>
        <div style="font-size:22px;font-weight:900;color:#FFB800;text-shadow:0 0 20px rgba(255,184,0,0.3)">${winner?.startup_name || 'Unknown'}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;font-weight:500">Champion &middot; ${winner?.agent_name || ''}</div>
        <div style="font-size:20px;font-weight:900;color:#FFB800;margin-top:8px">${winnerHeadline}</div>
        <div style="font-size:10px;color:var(--text-muted);margin-top:4px">${winnerSubhead}</div>
        ${summary?.winner_summary ? `<div style="font-size:10px;color:var(--text-dim);line-height:1.5;max-width:520px;margin:10px auto 0">${summary.winner_summary}</div>` : ''}
      </div>

      <div style="margin:16px 0">
        ${podium.map((s, i) => {
          const medals = ['#FFB800', '#94A3B8', '#CD7F32'];
          const labels = ['1st', '2nd', '3rd'];
          const icons = ['&#129351;', '&#129352;', '&#129353;'];
          return `
            <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:4px;
                        background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;transition:all 0.15s"
                 onmouseover="this.style.background='rgba(255,255,255,0.07)'" onmouseout="this.style.background='rgba(255,255,255,0.04)'">
              <div style="font-size:18px;width:30px;text-align:center">${icons[i]}</div>
              <div style="flex:1">
                <div style="font-size:12px;font-weight:700">${s.startup_name}</div>
                <div style="font-size:9px;color:var(--text-muted)">${s.agent_name} &middot; ${s.sector}</div>
              </div>
              <div style="font-size:14px;font-weight:900;color:${medals[i]};text-shadow:0 0 8px ${medals[i]}33">${competitive ? `${formatScore(startupScore(s))} score` : formatMoneySimple(s.valuation)}</div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="margin:18px 0 10px">
        <div style="font-size:10px;color:#A78BFA;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Replay Recap</div>
        <div style="padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);margin-bottom:10px">
          <div style="display:flex;gap:14px;flex-wrap:wrap">
            ${summary?.winner_score != null ? `<div style="font-size:10px;color:var(--text-muted)">Winner: <span style="color:#FFB800;font-weight:800">${formatScore(summary.winner_score)}</span></div>` : ''}
            ${summary?.runner_up_score != null ? `<div style="font-size:10px;color:var(--text-muted)">Runner-up: <span style="color:#22D3EE;font-weight:800">${formatScore(summary.runner_up_score)}</span></div>` : ''}
            ${summary?.final_margin != null ? `<div style="font-size:10px;color:var(--text-muted)">Final margin: <span style="color:#A78BFA;font-weight:800">${formatScore(summary.final_margin)}</span></div>` : ''}
          </div>
          ${summary?.practice_takeaway?.headline ? `<div style="font-size:10px;color:#FB923C;line-height:1.5;margin-top:10px">Practice takeaway: ${summary.practice_takeaway.headline}</div>` : ''}
        </div>
        ${this._renderRunnerIncidents(summary)}
        ${shareUrl ? `
          <div style="padding:12px 14px;border-radius:12px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.14);margin-bottom:10px">
            <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:6px">Replay Link</div>
            <div style="font-size:10px;color:var(--text-dim);line-height:1.5;word-break:break-word">${shareUrl}</div>
          </div>
        ` : ''}
        ${this._renderTurningPoints(summary)}
      </div>

      <div style="margin:18px 0 10px">
        <div style="font-size:10px;color:#22D3EE;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Share Package</div>
        <div style="padding:12px 14px;border-radius:12px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.14);margin-bottom:10px">
          <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Headline</div>
          <div style="font-size:12px;color:var(--text);font-weight:800;line-height:1.45;margin-top:6px">${sharePackage.headline}</div>
          <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-top:12px">Caption</div>
          <div style="font-size:10px;color:var(--text-dim);line-height:1.55;white-space:pre-wrap;margin-top:6px">${sharePackage.caption}</div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <button class="btn-clean" id="pg-headline" style="flex:1;border-color:rgba(34,211,238,0.24);color:#22D3EE">Copy Headline</button>
            <button class="btn-clean" id="pg-caption" style="flex:1;border-color:rgba(34,211,238,0.24);color:#22D3EE">Copy Caption</button>
          </div>
        </div>
      </div>

      <div style="margin:18px 0 10px">
        <div style="font-size:10px;color:#FB923C;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Why They Lost</div>
        ${this._renderOutcomeCards(summary, sorted) || '<div style="font-size:10px;color:var(--text-muted)">Outcome diagnostics are not available for this match yet.</div>'}
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="pg-close">${isSharedReplay ? 'Keep Watching' : 'Close'}</button>
        <button class="btn-clean" id="pg-link" style="border-color:rgba(167,139,250,0.3);color:#A78BFA">Copy Link</button>
        <button class="btn-clean" id="pg-copy" style="border-color:rgba(34,211,238,0.3);color:#22D3EE">Copy Recap</button>
        <button class="btn-game btn-game-blue" id="pg-new" style="flex:2">&#9654; New Game</button>
      </div>
    `;
    this.open();

    this._modal.querySelector('#pg-close').addEventListener('click', () => this.close());
    this._modal.querySelector('#pg-headline').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#pg-headline');
      try {
        await navigator.clipboard.writeText(sharePackage.headline);
        btn.textContent = 'Copied';
        setTimeout(() => {
          btn.textContent = 'Copy Headline';
        }, 1500);
      } catch (e) {
        btn.textContent = 'Copy Failed';
      }
    });
    this._modal.querySelector('#pg-caption').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#pg-caption');
      try {
        await navigator.clipboard.writeText(sharePackage.caption);
        btn.textContent = 'Copied';
        setTimeout(() => {
          btn.textContent = 'Copy Caption';
        }, 1500);
      } catch (e) {
        btn.textContent = 'Copy Failed';
      }
    });
    this._modal.querySelector('#pg-link').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#pg-link');
      if (!shareUrl) {
        btn.textContent = 'No Link';
        return;
      }
      try {
        await navigator.clipboard.writeText(shareUrl);
        btn.textContent = 'Link Copied';
        setTimeout(() => {
          btn.textContent = 'Copy Link';
        }, 1500);
      } catch (e) {
        btn.textContent = 'Copy Failed';
      }
    });
    this._modal.querySelector('#pg-copy').addEventListener('click', async () => {
      const btn = this._modal.querySelector('#pg-copy');
      const recapText = this._buildReplayRecapText(summary, sorted, competitive);
      try {
        await navigator.clipboard.writeText(recapText);
        btn.textContent = 'Copied';
        setTimeout(() => {
          btn.textContent = 'Copy Recap';
        }, 1500);
      } catch (e) {
        btn.textContent = 'Copy Failed';
      }
    });
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
