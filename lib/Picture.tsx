import type { ImageRef } from '@/content/types';
import { imageManifest } from '@/content/image-manifest';

type PictureProps = {
  image: ImageRef;
  /** Tells the browser how wide the image renders, e.g. "(max-width: 767px) 100vw, 1280px". */
  sizes: string;
  /** Load straight away. Use for the first image on a page only. */
  priority?: boolean;
  className?: string;
};

/**
 * Serves AVIF and WebP with a JPEG fallback, at several widths.
 * Images not yet exported (missing from the manifest) render as an empty,
 * labelled box so layouts hold their shape.
 */
export function Picture({ image, sizes, priority = false, className }: PictureProps) {
  const entry = imageManifest[image.src];

  if (!entry) {
    return <span className={className} role="img" aria-label={image.alt} data-placeholder="" />;
  }

  const srcSet = (ext: string) =>
    entry.widths.map((w) => `/images/${image.src}-${w}.${ext} ${w}w`).join(', ');
  const largest = entry.widths[entry.widths.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      {/* A plain <img> inside <picture>: next/image needs a server, and this site is a static export. */}
      <img
        className={className}
        src={`/images/${image.src}-${largest}.jpg`}
        srcSet={srcSet('jpg')}
        sizes={sizes}
        alt={image.alt}
        width={entry.width}
        height={entry.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  );
}
