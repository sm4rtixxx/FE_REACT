import Box from '../Box/Box';
import styles from './Resettafocus.module.css';
import {useState, useEffect, useRef} from 'react';

export default function Resettafocus() {
  const inputRef = useRef(null);
  return (
    <Box>
      <form action="">
        <div>
          <label>Nome</label>
          {/* per legare il campo a inputRef devo usare l'attributo ref */}
          <input type="text" ref={inputRef} autoFocus />
        </div>
        <div>
          <label>Cognome</label>
          <input type="text" />
        </div>
        <div>
          <label>Telefono</label>
          <input type="text" />
        </div>
        {/* per accedere ai metodi e proprietà dell'oggetto input text devo considerare .current */}
        <button type="reset" onClick={() => inputRef.current.focus()}>
          Pulisci
        </button>
      </form>
    </Box>
  );
}
