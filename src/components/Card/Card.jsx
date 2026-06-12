import style from './Card.module.css';
import sole from './sole.jpeg';

export default function Card() {
  return (
    <section className={style.container}>
      <figure>
        {/* <img src="sole.jpeg" alt="immagine" /> in questo modo l'immagine non sarà caricata */}
        <img src={sole} alt="" className={style.img} />
      </figure>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aut ratione, est asperiores cupiditate velit eius
        ad, neque doloribus deserunt in quasi ipsam error et porro suscipit sapiente. Dignissimos, aperiam?
      </p>
    </section>
  );
}
