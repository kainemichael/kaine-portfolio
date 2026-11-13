import styles from './ListItem.module.css';

type ListItemProps = {
  number: string;
  title: string;
  body: string;
};

/** Render inside an <ol>. The visible number is decorative; the list provides the order. */
export function ListItem({ number, title, body }: ListItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.number} aria-hidden="true">
        {number}
      </span>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
      </div>
    </li>
  );
}
