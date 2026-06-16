import styles from './Convertitoretemperatura.module.css';
import Box from '../Box/Box';
import {useState, useEffect, useRef} from 'react';
import InputTemperatura from './InputTemperatura';

//***** Volendo potrei definire internamente il componente esterno */
// function InputTemperatura({etichetta, valore, onChange}) {
//   return (
//     <Box>
//       <label htmlFor="temp">{etichetta}</label>
//       <input type="number" name="temp" id="temp" onChange={e => onChange(e.target.value)} value={valore.toFixed(2)} />
//     </Box>
//   );
// }

export default function Convertitoretemperatura() {
  const [tempC, setTempC] = useState(0);

  const fromFarToCel = f => ((f - 32) * 5) / 9;
  const fromCelToFar = c => (c * 9) / 5 + 32;

  //esempio di lifting state up
  return (
    <Box className={styles.container}>
      <h2>Convertitore di temperatura</h2>
      <InputTemperatura etichetta="Celsius (C°)" valore={tempC} onChange={val => setTempC(+val)} />
      <InputTemperatura
        etichetta="Farenheit (F°)"
        valore={fromCelToFar(tempC)}
        onChange={val => setTempC(fromFarToCel(+val))}
      />
    </Box>
  );
}
