import Box from '../Box/Box';
import styles from './Formvalidation.module.css';
import {useState, useEffect, useRef} from 'react';

export default function Formvalidation() {
  const [campi, setCampi] = useState({nome: '', email: '', password: '', confermaPassword: ''});
  const [errori, setErrori] = useState({nome: '', email: '', password: '', confermaPassword: ''});
  const [erroreGenerale, setErroreGenerale] = useState('');

  useEffect(() => {
    setErroreGenerale('');
  }, [campi]);

  const inviaForm = e => {
    e.preventDefault();
    //controlla se esistono campi non valorizzati
    if (Object.values(campi).some(val => val == '')) {
      setErroreGenerale('Tutti i campi sono obbligatori');
      return;
    }
    //controlla se l'oggetto errori ha qualche errore
    if (Object.values(errori).some(err => err !== '')) {
      setErroreGenerale('Correggi tutti gli errori');
      return;
    }
    setErroreGenerale('');
  };

  const validaCampi = (campo, valore) => {
    console.log('validaCampi campo= ', campo, ' valore= ', valore);
    if (campo === 'nome') {
      console.log('caso nome');
      //obbligatorio e deve avere almeno 3 caratteri
      setErrori(prev => ({...prev, nome: valore.length < 3 ? 'Il nome deve avere almeno 3 caratteri' : ''}));
    }
    if (campo === 'email') {
      //obbligatorio e deve essere una email valida
      setErrori(prev => ({
        ...prev,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valore) ? '' : 'Email non valida'
      }));
    }
    if (campo === 'password') {
      //obbligatorio e deve essere lungo almeno otto caratteri e contenere almeno un numero
      setErrori(prev => ({
        ...prev,
        password: /^(?=.*\d).{8,}$/.test(valore) ? '' : 'Minimo 8 caratteri di cui almeno uno numerico'
      }));
    }

    if (campo === 'confermaPassword') {
      //obbligatorio e deve essere uguale a pwd
      setErrori(prev => ({...prev, confermaPassword: valore == campi.password ? '' : 'Le password non coincidono'}));
    }
  };
  return (
    <Box>
      <form onSubmit={inviaForm} className={styles.formWrap}>
        {/* nome */}
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className={errori.nome ? styles.inputErrore : ''}
            name="nome"
            id="nome"
            onChange={e => setCampi({...campi, nome: e.target.value})}
            onBlur={e => validaCampi('nome', e.target.value)}
          />
          {errori.nome && <p className={styles.msgErrore}>{errori.nome}</p>}
        </div>
        {/* email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={errori.email ? styles.inputErrore : ''}
            name="email"
            id="email"
            onChange={e => setCampi({...campi, email: e.target.value})}
            onBlur={e => validaCampi('email', e.target.value)}
          />
          {errori.email && <p className={styles.msgErrore}>{errori.email}</p>}
        </div>

        {/* password */}
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={errori.password ? styles.inputErrore : ''}
            name="password"
            id="password"
            onChange={e => setCampi({...campi, password: e.target.value})}
            onBlur={e => validaCampi('password', e.target.value)}
          />
          {errori.password && <p className={styles.msgErrore}>{errori.password}</p>}
        </div>

        {/* confermaPassword */}

        <div className={styles.formGroup}>
          <label htmlFor="confermaPassword">Conferma Password</label>
          <input
            type="password"
            className={errori.confermaPassword ? styles.inputErrore : ''}
            name="confermaPassword"
            id="confermaPassword"
            onChange={e => setCampi({...campi, confermaPassword: e.target.value})}
            onBlur={e => validaCampi('confermaPassword', e.target.value)}
          />
          {errori.confermaPassword && <p className={styles.msgErrore}>{errori.confermaPassword}</p>}
        </div>
        {erroreGenerale && <p className={styles.erroreGenerale}>{erroreGenerale}</p>}
        <button>Registrati</button>
      </form>
    </Box>
  );
}
