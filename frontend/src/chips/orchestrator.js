import chipData from './chips.json';

/**
 * Domain Chip Orchestrator
 * Reads startup sector, turn, and state metrics to produce
 * prioritized action recommendations and risk warnings.
 */
export class ChipOrchestrator {
  constructor() {
    this.chips = chipData;
  }

  /**
   * Get the chip profile for a given sector.
   * Falls back to 'saas' if sector not found.
   */
  getChip(sector) {
    const key = (sector || 'saas').toLowerCase().replace(/[\s-]/g, '');
    return this.chips[key] || this.chips.saas;
  }

  /**
   * Determine which phase a startup is in based on turn number.
   */
  getPhase(chip, turn) {
    for (const [phaseName, phaseData] of Object.entries(chip.phases)) {
      const [start, end] = phaseData.turns;
      if (turn >= start && turn <= end) {
        return { name: phaseName, ...phaseData };
      }
    }
    // Default to endgame if past all defined turns
    return { name: 'endgame', ...chip.phases.endgame };
  }

  /**
   * Detect active crises from startup state metrics.
   */
  detectCrises(startupData) {
    const crises = [];
    const runway = startupData.runway ?? 12;
    const trust = startupData.trust_score ?? startupData.morale ?? 70;
    const complianceHeat = startupData.compliance_heat ?? 0;
    const morale = startupData.morale ?? 70;

    if (runway < 5) {
      crises.push('low_runway');
    }
    if (trust < 45) {
      crises.push('low_trust');
    }
    if (complianceHeat > 60) {
      crises.push('compliance_heat');
    }
    if (morale < 35) {
      crises.push('low_morale');
    }

    return crises;
  }

  /**
   * Compute full recommendation for a startup at a given turn.
   * Returns: { chipName, phase, priorities, warnings, crises, crisisActions, urgency }
   */
  recommend(startupData, turn) {
    const sector = startupData.sector || 'saas';
    const chip = this.getChip(sector);
    const phase = this.getPhase(chip, turn);
    const crises = this.detectCrises(startupData);

    // Gather crisis-specific actions
    const crisisActions = [];
    for (const crisis of crises) {
      const responses = chip.crisis_responses[crisis] || [];
      for (const action of responses) {
        if (!crisisActions.includes(action)) {
          crisisActions.push(action);
        }
      }
    }

    // Merge priorities: crisis actions first, then phase defaults (deduplicated)
    const priorities = [...crisisActions];
    for (const p of phase.priorities) {
      if (!priorities.includes(p)) {
        priorities.push(p);
      }
    }

    // Team-aware boosts
    const team = startupData.team || [];
    const hasMarketer = team.some(m => (m.role || '').toLowerCase().includes('market'));
    const hasEngineer = team.some(m => (m.role || '').toLowerCase().includes('engineer'));

    // If no marketer, deprioritize marketing-heavy actions
    if (!hasMarketer) {
      const idx = priorities.indexOf('acquire_users:paid_ads');
      if (idx > 2) {
        // Move it lower - don't remove, just note it's weaker
      }
    }

    // Urgency level: 0=calm, 1=watch, 2=warning, 3=critical
    let urgency = 0;
    if (crises.length === 1) urgency = 1;
    if (crises.length === 2) urgency = 2;
    if (crises.length >= 3) urgency = 3;
    if (crises.includes('low_runway') && (startupData.runway ?? 12) < 3) urgency = 3;

    // Build warnings list
    const warnings = [...(phase.warnings || [])];
    if (crises.includes('low_runway')) {
      warnings.unshift(`CRITICAL: Only ${startupData.runway ?? '?'} months runway remaining`);
    }
    if (crises.includes('low_trust')) {
      warnings.unshift('Trust score dangerously low - prioritize recovery');
    }

    return {
      chipName: chip.name,
      sector,
      phase: phase.name,
      phaseTurns: phase.turns,
      priorities,
      warnings,
      crises,
      crisisActions,
      urgency,
    };
  }

  /**
   * Batch recommend for all startups in a game.
   */
  recommendAll(startups, turn) {
    const results = {};
    for (const [id, data] of Object.entries(startups)) {
      results[id] = this.recommend(data, turn);
    }
    return results;
  }
}

// Singleton instance
export const chipOrchestrator = new ChipOrchestrator();
