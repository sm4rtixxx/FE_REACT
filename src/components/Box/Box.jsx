import styles from './Box.module.css';

export default function Box({colore = 'lightGray', children}) {
  return (
    <section className={styles.box} style={{'--colore-bordo': colore}}>
      {children}
    </section>
  );
}
