import Link from 'next/link';
import type { ImageRef } from '@/content/types';
import { Picture } from '@/lib/Picture';
import styles from './NextProject.module.css';

type NextProjectProps = {
  title: string;
  description: string;
  image: ImageRef;
  href: string;
};

export function NextProject({ title, description, image, href }: NextProjectProps) {
  return (
    <section className={styles.section} aria-labelledby="next-project">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p id="next-project" className={styles.eyebrow}>
            Next project
          </p>
          <h2 className={styles.title}>
            <Link href={href} className={styles.link}>
              {title}
            </Link>
          </h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.cta} aria-hidden="true">
            Read case study →
          </p>
        </div>
        <div className={styles.media}>
          <Picture image={image} sizes="(max-width: 767px) 100vw, 656px" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
