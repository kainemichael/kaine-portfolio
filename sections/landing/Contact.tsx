import { Button } from '@/components/Button';
import { contact, site } from '@/content/site';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.contact} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        <h2 id="contact-heading" className={styles.heading}>
          {contact.heading}
        </h2>
        <div className={styles.actions}>
          <Button href={`mailto:${site.email}`}>Get in touch</Button>
          <a className={styles.email} href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
