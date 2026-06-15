import Box from '../Box/Box';
import styles from './Contatoreuseref.module.css';
import {useState, useEffect, useRef} from 'react';
// Crea un componente con un bottone "Clicca". Ogni click incrementa un contatore interno. Il numero non viene mostrato a schermo. Quando premi un secondo bottone "Mostra", il valore attuale viene stampato in console.
// Concetto: useRef per tenere un valore in memoria senza causare re-render. La differenza con useState si vede chiaramente perche aggiornare il ref non aggiorna la UI.

export default function Contatoreuseref() {
  const counterRef = useRef(0);
  console.log('sto renderizzando');
  return (
    <Box>
      {/* questo log lo vedrò solo al caricamento della pagina ma mai quando clickerò sul + perchè sto lavorando con useRef. Se usassi useState vedrei il log ogni volta che premo + con dispendio inutile di risorse */}
      {console.log('sto renderizzando da jsx')}
      <button onClick={() => counterRef.current++}>+</button>
      <button onClick={() => console.log(counterRef.current)}>StampaContatore</button>
    </Box>
  );
}
