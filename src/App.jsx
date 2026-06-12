import {useState} from 'react';
import './App.css';
import Biglietto from './components/Biglietto.jsx';
import MeteoInfo from './components/MeteoInfo.jsx';
import MeteoRaffa from './components/MeteoRaffa.jsx';
import Card from './components/Card/Card.jsx';
import Card2 from './components/Card2/Card2.jsx';
import Utente from './components/Utente/Utente.jsx';
import Box from './components/Box/Box.jsx';
import Contatore from './components/Contatore/Contatore.jsx';
import Semaforo from './components/Semaforo/Semaforo.jsx';
import Orologio from './components/Orologio/Orologio.jsx';

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
      <Orologio></Orologio>
    </>
  );
}

export default App;
