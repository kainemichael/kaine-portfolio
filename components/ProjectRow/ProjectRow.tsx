import Link from 'next/link';
import type { ImageRef } from '@/content/types';
import { Picture } from '@/lib/Picture';
import { Tag } from '../Tag';
import styles from './ProjectRow.module.css';

type ProjectRowProps = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  /** e.g. "Product designer · 2026" */
  role: string;
  industry: string;
  tags: string[];
  image: ImageRef;
  href: string;
  priority?: boolean;
};

/** One case study on the Work page. The industry is always the first tag. */
export function ProjectRow({
  number,
  title,
  tagline,
  description,
  role,
  industry,
  tags,
  image,
  href,
  priority,
}: ProjectRowProps) {
  return (
    <article className={styles.row}>
      <div className={styles.media}>
        <Picture
          image={image}
          sizes="(max-width: 767px) 100vw, 720px"
          className={styles.image}
          priority={priority}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.number}>{number}</p>
        <h2 className={styles.title}>
          <Link href={href} className={styles.link}>
            {title}
          </Link>
        </h2>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.role}>{role}</p>
        <ul className={styles.tags} aria-label="Tags">
          <li>
            <Tag label={industry} variant="brand" />
          </li>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>
        <p className={styles.cta} aria-hidden="true">
          Read case study →
        </p>
      </div>
    </article>
  );
}
