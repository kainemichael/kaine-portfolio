import styles from './MetaItem.module.css';

type MetaItemProps = {
  label: string;
  value: string;
};

/**
 * One key/value pair. Render inside a <dl>.
 * Column layout on desktop, row layout (with a divider) on mobile.
 */
export function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className={styles.item}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.value}>{value}</dd>
    </div>
  );
}
