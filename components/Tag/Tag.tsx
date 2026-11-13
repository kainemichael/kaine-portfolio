import Link from 'next/link';
import styles from './Tag.module.css';

type TagProps = {
  label: string;
  /** neutral: default. active: selected tab. brand: the industry tag. */
  variant?: 'neutral' | 'active' | 'brand';
  /** Renders a link (used for the Work page tabs). */
  href?: string;
};

export function Tag({ label, variant = 'neutral', href }: TagProps) {
  const className = `${styles.tag} ${styles[variant]}`;

  if (href) {
    return (
      <Link
        className={`${className} ${styles.link}`}
        href={href}
        aria-current={variant === 'active' ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
