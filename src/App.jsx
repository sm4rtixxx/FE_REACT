import {useState} from 'react';
import './App.css';
import Biglietto from './components/Biglietto.jsx';
import MeteoInfo from './components/MeteoInfo.jsx';
import MeteoRaffa from './components/MeteoRaffa.jsx';
import Card from './components/Card/Card.jsx';
import Card2 from './components/Card2/Card2.jsx';
import Meteo from './components/Meteo.jsx';

function App() {
  return (
    <>
      <h1>PRIMO REACT</h1>
      <Biglietto nome="Giacomo" destinazione="Roma" />
      <Biglietto nome="Emma" destinazione="Bari" />
      <Biglietto nome="Marta" destinazione="Como" />
      <Biglietto destinazione="Marrachesh" />
      <MeteoInfo />
      <Card />
      <Card2 />
      <Meteo/>
    </>
  );
}

export default App;
