export function formatMoney(value) {
  if (value == null) return '$0';
  const num = Number(value);
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
  return `$${num.toFixed(0)}`;
}

export function formatNumber(value) {
  if (value == null) return '0';
  const num = Number(value);
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toFixed(0);
}

export function formatPercent(value) {
  if (value == null) return '0%';
  return `${Math.round(Number(value))}%`;
}

export function formatScore(value) {
  if (value == null) return '0.0';
  return Number(value).toFixed(1);
}

export function formatRunway(months) {
  if (months == null) return '?';
  const m = Number(months);
  if (m > 24) return '24+mo';
  return `${m.toFixed(1)}mo`;
}

export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
