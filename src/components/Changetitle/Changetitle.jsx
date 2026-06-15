import styles from './Changetitle.module.css';
import {useState, useEffect} from 'react';

export default function Changetitle() {
  //document.title -> per accedere in lettura e scrittura al title della head dell'index.html
  //document.title non può essere gestito da jsx se non tramite l'hook useEffect

  //useState e useEffect sono degli hook e vanno scritti SEMPRE PRIMA DEL RETURN DEL COMPONENTE
  const [title, setTitle] = useState(document.title);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className={styles.container}>
      <input type="text" onChange={event => setTitle(event.target.value)} />
    </div>
  );
}
