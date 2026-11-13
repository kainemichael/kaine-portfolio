import { Button } from '@/components/Button';
import { hero } from '@/content/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-heading">
      <p className={styles.kicker}>
        <span className={styles.kickerFull}>{hero.kicker}</span>
        <span className={styles.kickerShort}>{hero.kickerShort}</span>
      </p>
      <h1 id="hero-heading" className={styles.heading}>
        {hero.heading}
      </h1>
      <p className={styles.intro}>{hero.intro}</p>
      <div className={styles.actions}>
        <Button href="/work/">View work</Button>
        <Button href="/#about" variant="secondary">
          About me
        </Button>
      </div>
    </section>
  );
}
