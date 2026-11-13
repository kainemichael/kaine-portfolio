import Link from 'next/link';
import { Icon, type IconName } from '../Icon';
import styles from './NavItem.module.css';

type NavItemProps = {
  label: string;
  icon: IconName;
  href: string;
  active?: boolean;
  /** On mobile only the active item shows its label; the others keep it for screen readers. */
  collapseLabel?: boolean;
};

export function NavItem({
  label,
  icon,
  href,
  active = false,
  collapseLabel = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`${styles.item} ${active ? styles.active : ''} ${collapseLabel && !active ? styles.collapsed : ''}`}
      aria-current={active ? 'page' : undefined}
    >
      <Icon name={icon} size={18} />
      <span className={styles.label}>{label}</span>
    </Link>
  );
}
