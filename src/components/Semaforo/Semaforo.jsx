import styles from "./Semaforo.module.css";
import { useState } from "react";

export default function Semaforo() {
  const [luce, setSemaforo] = useState(0);

  return (
    <div className={styles.container}>
      
      <div
        className={`${styles.light} ${
          luce === 0 ? styles.red : ""
        }`}
      />

      <div
        className={`${styles.light} ${
          luce === 1 ? styles.yellow : ""
        }`}
      />

      <div
        className={`${styles.light} ${
          luce === 2 ? styles.green : ""
        }`}
      />

      <div className={styles.buttons}>
        <button onClick={() => setSemaforo((luce+1)%3)}>
          Cambia colore
        </button>
      </div>
    </div>
  );
}