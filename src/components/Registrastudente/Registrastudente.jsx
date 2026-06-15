import Box from '../Box/Box';
import styles from './Registrastudente.module.css';
import {useState, useEffect, useRef} from 'react';

function InfoStudente({nome, elimina, promuovi}) {
  return (
    <div>
      <span>Nome: {nome}</span>
      <button onClick={elimina}>Elimina</button>
      <button onClick={promuovi}>Promuovi</button>
    </div>
  );
}

export default function Registrastudente() {
  const nomeRef = useRef('');
  const contatore = useRef(0);
  const [studenti, setStudenti] = useState([]);
  //Ogni studente sarà un oggetto {id:"", nome:""}

  const aggiungi = () => {
    setStudenti([...studenti, {id: contatore.current, nome: nomeRef.current.value}]);
    contatore.current++;
    nomeRef.current.value = '';
    nomeRef.current.focus();
  };

  const elimina = id => {
    setStudenti(studenti.filter(studente => studente.id != id));
  };

  const promuovi = id => {
    setStudenti(
      studenti.map(studente => (studente.id == id ? {...studente, nome: studente.nome + ' - Promosso'} : {...studente}))
    );
  };

  return (
    <Box>
      <label htmlFor="nome">Nome Studente</label>
      <input type="text" ref={nomeRef} name="nome" id="nome" />
      <button onClick={aggiungi}>registra</button>
      {studenti.map(studente => (
        <InfoStudente
          key={studente.id}
          nome={studente.nome}
          elimina={() => elimina(studente.id)}
          promuovi={() => promuovi(studente.id)}
        />
      ))}
    </Box>
  );
}
