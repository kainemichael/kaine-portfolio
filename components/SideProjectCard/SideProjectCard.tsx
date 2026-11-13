import type { ImageRef } from '@/content/types';
import { Picture } from '@/lib/Picture';
import styles from './SideProjectCard.module.css';

type SideProjectCardProps = {
  title: string;
  kind: string;
  description: string;
  status?: string;
  collaborator: string;
  href?: string;
  image?: ImageRef;
};

/** Horizontal on desktop, stacked on mobile. "View →" only shows when there is a link. */
export function SideProjectCard({
  title,
  kind,
  description,
  status,
  collaborator,
  href,
  image,
}: SideProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {image ? (
          <Picture image={image} sizes="(max-width: 767px) 100vw, 240px" className={styles.image} />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            Image
          </span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.meta}>
            <p className={styles.kind}>{kind}</p>
            {status && (
              <p className={styles.status}>
                <span className={styles.dot} aria-hidden="true" />
                {status}
              </p>
            )}
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          <p className={styles.collaborator}>
            <span className={styles.avatar} aria-hidden="true" />
            {collaborator}
          </p>
          {href && (
            <a className={styles.link} href={href}>
              View <span aria-hidden="true">→</span>
              <span className="visually-hidden"> {title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
