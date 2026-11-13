import { Tag } from '@/components/Tag';
import { about } from '@/content/site';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={`container ${styles.about}`} aria-labelledby="about-heading">
      <p className={styles.label}>{about.label}</p>
      <div className={styles.content}>
        <h2 id="about-heading" className={styles.heading}>
          {about.heading}
        </h2>
        <p className={styles.body}>{about.body}</p>
        <ul className={styles.services} aria-label="Services">
          {about.services.map((service) => (
            <li key={service}>
              <Tag label={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
