export const AGENT_COLORS = [
  '#3B82F6', '#22C55E', '#F0B429', '#EF4444',
  '#A78BFA', '#22D3EE', '#FB923C', '#F472B6',
];

export const STRATEGY_COLORS = {
  balanced: '#3B82F6',
  aggressive: '#EF4444',
  lean: '#22C55E',
  chaos: '#A78BFA',
};

export const SECTOR_COLORS = {
  ai: '#3B82F6',
  fintech: '#22C55E',
  healthtech: '#EF4444',
  edtech: '#FB923C',
  saas: '#A78BFA',
  crypto: '#F0B429',
  gaming: '#22D3EE',
  greentech: '#4ADE80',
};

export function getAgentColor(index) {
  return AGENT_COLORS[index % AGENT_COLORS.length];
}

export function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}
