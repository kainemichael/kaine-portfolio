import { BrandPattern } from '../BrandPattern';
import styles from './Footer.module.css';

type FooterProps = {
  name: string;
  location: string;
  email: string;
  socials: { label: string; href: string }[];
};

export function Footer({ name, location, email, socials }: FooterProps) {
  const links = [...socials.filter((s) => s.href), { label: 'Email', href: `mailto:${email}` }];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {name} · {location}
        </p>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.band}>
        <BrandPattern pattern="band" />
      </div>
    </footer>
  );
}
