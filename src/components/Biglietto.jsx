export default function Biglietto({nome = 'Viaggiatore anonimo', destinazione}) {
  //   let nome = 'Filippo';
  //   let destinazione = 'Dublino';
  return (
    <section className="biglietto">
      <p>Nome viaggiatore: {nome}</p>
      <p>Destinazione:{destinazione}</p>
    </section>
  );
}
// export default Biglietto;
