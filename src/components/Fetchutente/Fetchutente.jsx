import styles from './Fetchutente.module.css';
import {useState, useEffect, useRef} from 'react';
import Box from '../Box/Box.jsx';

export default function Fetchutente() {
  const [dati, setDati] = useState(null);
  const [num, setNum] = useState(0);
  const [errore, setErrore] = useState('');
  useEffect(() => {
    console.log('useEffect ingresso');
    async function carica() {
      console.log('carica ingresso');
      try {
        console.log('entro nel try');
        const risposta = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`);
        console.log(('risposta=', risposta));
        if (!risposta.ok) {
          console.log('errore');
          throw new Error(`Si è verificato un errore (${risposta.status}). Riprova`);
        }
        let temp = await risposta.json();
        console.log(('dati=', temp));
        setDati(temp);
      } catch (err) {
        setErrore(err);
      }
    }
    carica();
  }, [num]);

  return (
    <Box>
      <div>
        <p>{num}</p>
        {dati ?
          <>
            <p>Nome: {dati.name}</p>
            <p>Nome Utente: {dati.username}</p>
            <p>Email: {dati.email}</p>
          </>
        : 'Utente non trovato'}
      </div>
      <button onClick={() => setNum(1)}>1</button>
      <button onClick={() => setNum(2)}>2</button>
      <button onClick={() => setNum(3)}>3</button>
    </Box>
  );
}
