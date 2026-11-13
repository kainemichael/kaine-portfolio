import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon, type IconName } from '../Icon';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  /** Figma "Style". Named `variant` because `style` is reserved in React. */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  icon?: IconName;
  /** Renders a link when set, otherwise a <button>. */
  href?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={size === 'md' ? 16 : 14} />}
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:)/.test(href);
    return external ? (
      <a className={className} href={href}>
        {content}
      </a>
    ) : (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  );
}
