import { BrandPattern } from '@/components/BrandPattern';
import { contact, site } from '@/content/site';
import styles from './Contact.module.css';

/** Ink panel based on the "Layout 01 · Cover" slide: text on the left, the pattern field fading in on the right. */
export function Contact() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="contact-heading">
      <div className={styles.panel}>
        <div className={styles.field} aria-hidden="true">
          <BrandPattern pattern="field" />
        </div>

        <div className={styles.content}>
          <p className={styles.lockup}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/kaine-monogram.svg" alt="" width={32} height={32} />
            {site.name}
          </p>

          <div className={styles.message}>
            <p className={styles.label}>{contact.label}</p>
            <h2 id="contact-heading" className={styles.heading}>
              {contact.heading}
            </h2>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className={styles.email}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Malta</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
