import type { ImageRef } from '@/content/types';
import { Picture } from '@/lib/Picture';
import styles from './Visual.module.css';

type VisualProps = {
  image: ImageRef;
  caption?: string;
  priority?: boolean;
};

/** A full-width case study image (16:10) with an optional caption. Mobile shows the same image. */
export function Visual({ image, caption, priority }: VisualProps) {
  return (
    <figure className={styles.visual}>
      <div className={styles.media}>
        <Picture
          image={image}
          sizes="(max-width: 767px) 100vw, 1280px"
          className={styles.image}
          priority={priority}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
