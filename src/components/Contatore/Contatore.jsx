import Box from '../Box/Box';
import styles from './Contatore.module.css';
import {useState} from 'react';

export default function Contatore() {
  const [contatore, setContatore] = useState(0);
  const [contatori, setContatori] = useState({
    contatore1: 0,
    contatore2: 0,
    contatore3: 0
  });

  return (
    <>
      <Box>
        <p>Contatore: {contatore}</p>
        <button onClick={() => setContatore(contatore + 2)}>+2</button>
        {/* <button onClick={() => (contatore = contatore + 2)}>+2</button>  Approccio sbagliato: il contatore non si aggiorna*/}
        <button onClick={() => setContatore(0)}>reset</button>
        <button onClick={() => (contatore > 0 ? setContatore(contatore - 2) : 0)}>-2</button>
        {/* <button onClick={() => setContatore(Math.max(0, contatore - 2))}>-2</button>  Soluzione alternativa*/}
      </Box>
      <Box>
        <p>Contatore1: {contatori.contatore1}</p>
        <p>Contatore2: {contatori.contatore2}</p>
        <p>Contatore3: {contatori.contatore3}</p>
        {/* In set contatori anche se vado a cambiarne uno solo devo sempre passare tutto l'oggetto primva (qui si riferisce a prev) */}
        <button onClick={() => setContatori(prev => ({...prev, contatore1: prev.contatore1 + 1}))}>
          Incrementa cont1
        </button>
        <button onClick={() => setContatori(prev => ({...prev, contatore2: prev.contatore1 + 2}))}>
          Incrementa cont2 rispetto a cont1
        </button>
        <button onClick={prev => setContatori({contatore1: 10, contatore2: 20, contatore3: 30})}>Cambia tutti</button>
      </Box>
    </>
  );
}
