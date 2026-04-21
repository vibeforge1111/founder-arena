export function isCompetitiveMode(gameData) {
  return gameData?.game_mode === 'competitive_mode';
}

export function startupScore(startup) {
  if (!startup) return 0;
  if (startup.score != null) return Number(startup.score) || 0;
  return Number(startup.seven_dimension_scores?.total_score) || 0;
}

export function rankedStartups(gameData) {
  const startups = gameData?.startups || {};
  const entries = Object.entries(startups).map(([id, startup]) => ({ id, ...startup }));
  const rankings = gameData?.rankings || [];
  const rankingOrder = new Map(rankings.map((item) => [item.startup_id, item.rank]));

  if (rankingOrder.size > 0) {
    return entries.sort((a, b) => {
      const rankA = rankingOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER;
      const rankB = rankingOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER;
      return rankA - rankB;
    });
  }

  if (isCompetitiveMode(gameData)) {
    return entries.sort((a, b) => {
      const scoreGap = startupScore(b) - startupScore(a);
      if (scoreGap !== 0) return scoreGap;
      return (b.valuation || 0) - (a.valuation || 0);
    });
  }

  return entries.sort((a, b) => (b.valuation || 0) - (a.valuation || 0));
}
