const DATE_TEXT_PATTERN = /^(\d{4})-(\d{2})-(\d{2})/;

export function formatJapaneseDate(dateText: string): string {
  const match = DATE_TEXT_PATTERN.exec(dateText.trim());
  if (!match) {
    return dateText;
  }

  const [, year, month, day] = match;
  return `${year}年${month}月${day}日`;
}

export function toDate(dateText: string): Date | undefined {
  const normalized = dateText.trim().replace(" +0900", "+09:00").replace(" ", "T");
  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return parsed;
}

export function toIsoDate(dateText?: string): string | undefined {
  if (!dateText) {
    return undefined;
  }

  return toDate(dateText)?.toISOString();
}

export function sortByPublishedAtDesc<T extends { data: { published_at: string } }>(
  entries: T[],
): T[] {
  return [...entries].sort((a, b) => b.data.published_at.localeCompare(a.data.published_at));
}
