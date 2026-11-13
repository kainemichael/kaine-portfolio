import Link from 'next/link';
import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  /** id of the heading, so the section can be labelled by it. */
  id: string;
  title: string;
  description?: string;
  link?: { label: string; href: string };
};

/**
 * Title, one-line description and an optional "See all →" link.
 * On mobile the link moves below the section content: render
 * <SectionHeader.MobileLink> after the grid.
 */
export function SectionHeader({ id, title, description, link }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h2 id={id} className={styles.heading}>
          {title}
        </h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {link && <SectionLink {...link} className={styles.desktopLink} />}
    </div>
  );
}

function SectionLink({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`${styles.link} ${className}`}>
      {label} <span aria-hidden="true">→</span>
    </Link>
  );
}

SectionHeader.MobileLink = function MobileLink({ label, href }: { label: string; href: string }) {
  return <SectionLink label={label} href={href} className={styles.mobileLink} />;
};
