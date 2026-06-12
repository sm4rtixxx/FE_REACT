import styles from './Semaforo.module.css';
import {useState} from 'react';

const SEMAFORO = [
  {nome: 'verde', colore: 'green'},
  {nome: 'giallo', colore: 'yellow'},
  {nome: 'rosso', colore: 'red'}
];

export default function Semaforo() {
  const [indice, setIndice] = useState(0);
  const {nome, colore} = SEMAFORO[indice];

  return (
    <div className={styles.container}>
      <div>
        <p>Il semaforo è: {nome}</p>
        <div className={styles.cerchio} style={{'--colore': colore}} />
      </div>
      {/* <button onClick={() => setIndice((indice + 1) % SEMAFORO.length)}>scatta</button> 
      Con questo approccio io vado a usare indice che potrebbe non essere allineato allo stato attuale*/}
      {/* Quella che segue è l'approccio funzionale:in questo caso è indifferente usare un approccio o un altro ma in generale è meglio abituarsi a usare questo. Passando la funzione invece di indice diciamo a react di valorizzare il parametro i con il valore attuale (non quello congelato) */}
      <button onClick={() => setIndice(i => (i + 1) % SEMAFORO.length)}>scatta</button>
    </div>
  );
}
