export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

export function formatDate(isoString: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(isoString));
}

export function formatWeight(kg: number): string {
  return `${kg.toLocaleString('pt-BR')} kg`;
}

export function formatCalories(kcal: number): string {
  return `${kcal.toLocaleString('pt-BR')} kcal`;
}
