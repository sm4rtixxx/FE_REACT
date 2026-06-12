import styles from './Utente.module.css';

const utenti = [
  {id: 1, nome: 'Emilio Lopez', email: 'emilio.lopez@gmail.com', ruolo: 'developer'},
  {id: 2, nome: 'Raffaele Gatta', email: 'raffaele.gatta@gmail.com', ruolo: 'specialist'},
  {id: 3, nome: 'Laura Domina', email: 'laura.domina@gmail.com', ruolo: 'admin'}
];

function Scheda({nome, email, ruolo}) {
  return (
    <div className={styles.scheda}>
      <div className={styles.avatar}>{nome.charAt(0).toUpperCase()}</div>
      <div className={styles.info}>
        <p className={styles.nome}>{nome}</p>
        <p className={styles.email}>{email}</p>
      </div>
      <span className={`${styles.badge} ${styles[ruolo]}`}>{ruolo}</span>
    </div>
  );
}

export default function Utente() {
  return (
    <div className={styles.pagina}>
      <h1>Utenti</h1>
      {utenti.map(u => (
        <Scheda key={u.id} nome={u.nome} email={u.email} ruolo={u.ruolo} />
      ))}
    </div>
  );
}
