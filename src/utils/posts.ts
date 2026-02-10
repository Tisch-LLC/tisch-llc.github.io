const DATE_PREFIX_PATTERN = /^\d{4}-\d{2}-\d{2}-/;
const EXTENSION_PATTERN = /\.[^/.]+$/;

export function toPostSlug(entryId: string): string {
  const fileName = entryId.split("/").pop() ?? entryId;
  return fileName.replace(EXTENSION_PATTERN, "").replace(DATE_PREFIX_PATTERN, "");
}

export function toPostPath(entryId: string): string {
  return `/posts/${toPostSlug(entryId)}`;
}
