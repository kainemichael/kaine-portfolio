import Link from 'next/link';
import type { ImageRef } from '@/content/types';
import { Picture } from '@/lib/Picture';
import styles from './WorkCard.module.css';

type WorkCardProps = {
  type: 'case-study' | 'exploration';
  /** "01" for case studies, "E01" for explorations. */
  number: string;
  title: string;
  /** Shown on the right of the footer. Always the industry. */
  kind: string;
  image?: ImageRef;
  /** Text shown in the media area while there is no image. */
  placeholder?: string;
  href?: string;
  /** Rendered image width, for the browser's image choice. */
  sizes: string;
};

export function WorkCard({
  type,
  number,
  title,
  kind,
  image,
  placeholder,
  href,
  sizes,
}: WorkCardProps) {
  return (
    <article className={`${styles.card} ${styles[type]}`}>
      <div className={styles.media}>
        {image ? (
          <Picture image={image} sizes={sizes} className={styles.image} />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            {placeholder}
          </span>
        )}
      </div>
      <div className={styles.footer}>
        <h3 className={styles.name}>
          <span className={styles.number}>{number}</span>
          {href ? (
            <Link href={href} className={styles.link}>
              {title}
            </Link>
          ) : (
            <span>{title}</span>
          )}
        </h3>
        <p className={styles.kind}>{kind}</p>
      </div>
    </article>
  );
}
