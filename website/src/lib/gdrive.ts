/**
 * Google Drive image URL utilities.
 *
 * Accepts various Google Drive share link formats and generates
 * direct-access URLs at different sizes for professional display.
 */

/** Standard image size presets (width in pixels) */
export const IMAGE_SIZES = {
  thumb: 200,
  small: 400,
  medium: 800,
  large: 1200,
  hero: 1920,
} as const;

export type ImageSize = keyof typeof IMAGE_SIZES;

/**
 * Extract the file ID from any common Google Drive URL format.
 *
 * Supported formats:
 *  - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *  - https://drive.google.com/open?id=FILE_ID
 *  - https://drive.google.com/uc?id=FILE_ID&export=view
 *  - https://drive.google.com/thumbnail?id=FILE_ID
 *  - https://lh3.googleusercontent.com/d/FILE_ID
 *  - Raw file ID string (no URL)
 */
export function extractFileId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  // Format: /file/d/FILE_ID/...
  const fileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return fileMatch[1];

  // Format: ?id=FILE_ID or &id=FILE_ID
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch) return idMatch[1];

  // Format: lh3.googleusercontent.com/d/FILE_ID
  const lhMatch = trimmed.match(/googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/);
  if (lhMatch) return lhMatch[1];

  // If the string looks like a raw file ID (only valid chars, 10+ length)
  if (/^[a-zA-Z0-9_-]{10,}$/.test(trimmed)) return trimmed;

  return null;
}

/**
 * Generate a Google Drive thumbnail URL at a specific pixel width.
 * This endpoint works for publicly shared files.
 */
export function getDriveThumbnailUrl(fileId: string, width: number): string {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${width}`;
}

/**
 * Generate a Google Drive direct view URL.
 */
export function getDriveDirectUrl(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${encodeURIComponent(fileId)}`;
}

/**
 * Convert a Google Drive share URL (or file ID) into a display-ready
 * image URL at the given preset size.
 *
 * When `url` is falsy (empty string, null, or undefined), returns the
 * fallback '/images/company-logo.png'.
 *
 * For non-falsy, non-Google-Drive URLs (e.g. a local /images/... path
 * or external URL), returns the original URL unchanged.
 */
export function driveUrl(url: string, size: ImageSize = 'medium'): string {
  if (!url) return '/images/company-logo.png';

  const fileId = extractFileId(url);
  if (!fileId) {
    // Not a Drive URL — return as-is (local path or other URL)
    return url;
  }

  return getDriveThumbnailUrl(fileId, IMAGE_SIZES[size]);
}

/**
 * Generate a srcSet string for responsive images from a Drive URL.
 * Returns pairs like "url 400w, url 800w, url 1200w".
 */
export function driveSrcSet(
  url: string,
  sizes: ImageSize[] = ['small', 'medium', 'large'],
): string {
  const fileId = extractFileId(url);
  if (!fileId) return '';

  return sizes
    .map((s) => `${getDriveThumbnailUrl(fileId, IMAGE_SIZES[s])} ${IMAGE_SIZES[s]}w`)
    .join(', ');
}

/**
 * Check whether a string looks like a Google Drive URL or file ID.
 */
export function isDriveUrl(url: string): boolean {
  return extractFileId(url) !== null && (
    url.includes('drive.google.com') ||
    url.includes('googleusercontent.com') ||
    /^[a-zA-Z0-9_-]{10,}$/.test(url.trim())
  );
}
