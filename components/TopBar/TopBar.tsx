import Link from 'next/link';
import styles from './TopBar.module.css';

type TopBarProps = {
  name: string;
  role: string;
};

/** Name pill fixed to the top left. The role is hidden on mobile. */
export function TopBar({ name, role }: TopBarProps) {
  return (
    <header className={styles.bar}>
      <Link href="/" className={styles.link} aria-label={`${name}, home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.logo}
          src="/brand/kaine-monogram.svg"
          alt=""
          width={32}
          height={32}
        />
        <span className={styles.name}>{name}</span>
      </Link>
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.role}>{role}</span>
    </header>
  );
}
