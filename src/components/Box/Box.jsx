import styles from './Box.module.css';

export default function Box({colore, children}) {
  return (
    <section className={styles.box} style={{'--colore-bordo': colore}}>
      {children}
    </section>
  );
}
