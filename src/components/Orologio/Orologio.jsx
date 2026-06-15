import styles from './Orologio.module.css';
import Box from '../Box/Box.jsx';
import {useState, useEffect} from 'react';

//funzione figlia
function OrologioFiglio() {
  const [ora, setOra] = useState(new Date());
  // modifica per Giuseppe

  useEffect(() => {
    //usiamo setInterval per dimostrare lo useEffect perchè è gestito direttamente dal browser quindi react non è in grado di gestirlo se non attraverso l'hook useEffect

    // intervallo = identificativo restituito da setInterval
    const intervallo = setInterval(() => {
      setOra(new Date());
    }, 1000);

    return () => clearInterval(intervallo);
  }, []);

  return <div className={styles.orologio}>{ora.toLocaleTimeString()}</div>;
} //fine funzione figlia

//Componente padre che monta e smonta la funzione orologio

export default function Orologio() {
  const [visible, setVisibile] = useState(true);

  return (
    <Box>
      {visible ?
        <OrologioFiglio />
      : <div className={styles.placeholder}> Orologio smontato — il timer e' fermato </div>}
      <div className={styles.controlli}>
        <button className={styles.btnMostra} onClick={() => setVisibile(!visible)}>
          {visible ? 'nascondi' : 'mostra'}
        </button>
      </div>
    </Box>
  );
}
