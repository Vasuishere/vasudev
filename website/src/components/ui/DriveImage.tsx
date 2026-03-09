'use client';

import Image from 'next/image';
import { driveUrl, type ImageSize } from '@/lib/gdrive';

interface DriveImageProps {
  /** Google Drive share URL, file ID, or local path */
  src: string;
  alt: string;
  /** Preset size — controls the resolution fetched from Drive */
  size?: ImageSize;
  width?: number;
  height?: number;
  /** Fill parent container (ignores width/height) */
  fill?: boolean;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

/**
 * Responsive image component that transparently handles Google Drive URLs.
 *
 * - Pass a Drive share link → auto-converts to a thumbnail at the right size.
 * - Pass a local path (e.g. /images/…) → works like a normal Next.js Image.
 */
export default function DriveImage({
  src,
  alt,
  size = 'medium',
  width,
  height,
  fill = false,
  className,
  priority = false,
  style,
}: DriveImageProps) {
  const resolvedSrc = driveUrl(src, size);

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        style={{ objectFit: 'cover', ...style }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        unoptimized={resolvedSrc.includes('drive.google.com') || resolvedSrc.includes('googleusercontent.com')}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      priority={priority}
      style={style}
      unoptimized={resolvedSrc.includes('drive.google.com') || resolvedSrc.includes('googleusercontent.com')}
    />
  );
}
