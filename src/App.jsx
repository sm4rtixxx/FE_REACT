import {useState} from 'react';
import './App.css';
import Biglietto from './components/Biglietto.jsx';
import Meteo from './components/Meteo.jsx';
import MeteoInfo from './components/MeteoInfo.jsx';
import MeteoRaffa from './components/MeteoRaffa.jsx';
import Card from './components/Card/Card.jsx';
import Card2 from './components/Card2/Card2.jsx';
import Utente from './components/Utente/Utente.jsx';
import Box from './components/Box/Box.jsx';
import Contatore from './components/Contatore/Contatore.jsx';
import Semaforo from './components/Semaforo/Semaforo.jsx';
import Orologio from './components/Orologio/Orologio.jsx';
import Changetitle from './components/Changetitle/Changetitle.jsx';
import FocusOnFirstField from './components/Resettafocus/Resettafocus.jsx';
import Contatoreuseref from './components/Contatoreuseref/Contatoreuseref.jsx';
import Registrastudente from './components/Registrastudente/Registrastudente.jsx';
import Formvalidation from './components/Formvalidation/Formvalidation.jsx';
import Convertitoretemperatura from './components/Convertitoretemperatura/Convertitoretemperatura.jsx';
import Fetchutente from './components/Fetchutente/Fetchutente.jsx';

function App() {
  return (
    <>
      {/* <Utente /> */}
      {/* <Biglietto nome="Giacomo" destinazione="Roma" />
      <Biglietto nome="Emma" destinazione="Bari" />
      <Biglietto nome="Marta" destinazione="Como" />
      <Biglietto destinazione="Marrachesh" /> */}
      {/* <MeteoInfo />     
      <Card2 /> */}
      {/* <Card /> */}
      {/* <Box colore="green">
        <h2>Titolo box1</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos fugiat animi? Magni eum voluptate
          obcaecati ipsa et laboriosam tenetur. Tempore neque aperiam nam consequuntur officiis hic voluptatibus
          sapiente distinctio.
        </p>
      </Box>
      <Box colore="red">
        <p>Ecco un altro box</p>
        <Box colore="blue">
          <p>con dentro un altro box</p>
        </Box>
      </Box> */}
      {/* <Contatore></Contatore> */}
      {/* <Box>
        <Semaforo></Semaforo>
      </Box> */}
      {/* <Orologio></Orologio> */}
      {/* <Changetitle /> */}
      {/* <FocusOnFirstField /> */}
      {/* <Contatoreuseref /> */}
      {/* <Registrastudente /> */}
      {/* <Formvalidation /> */}
      {/* <Convertitoretemperatura /> */}
      <Fetchutente />
    </>
  );
}

export default App;