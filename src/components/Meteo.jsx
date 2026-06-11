import icona from "../assets/media/clear.png"
export default function Meteo() {
    let gradi='22°' 
    let citta='Foggia'
    let umidita='13%'
    let vento= '7km/h'
  return (
    <>
    <main>
    <section>
        <img src={icona} alt="sole stilizzato" width={200} />

        <div>
            <h1>{gradi}</h1>
            <h2>{citta}</h2>
      </div>
    </section>

    <section id='umidita-vento'>
        <h3>Umidità: {umidita}</h3>
        <h3>Vento: {vento}</h3>
    </section>
    </main>
    </>
    );
}