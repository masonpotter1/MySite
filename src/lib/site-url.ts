const DEFAULT_SITE_URL = "https://cloutsites.com";

export function getSiteUrl(): string {
  const raw = process.env.SITE_URL?.trim() || DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/$/, "");
}
