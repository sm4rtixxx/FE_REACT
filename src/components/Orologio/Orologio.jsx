import styles from './Orologio.module.css'
import {useEffect, userState} from 'react'

export default function OrologioFiglio(){
const[ora,setOra]=useStato(new Date());

useEffect(()=>{
    const intervallo=setInterval(()=>{
        setOra(new Date());
    },1000);
return () =>clearInterval(intervallo)},[]);

    return <div className={styles.container}> </div>
}//fine funzione figlia

//componente padre che monta e smonta la funzione orologio
export default function Orologio(){
    const [visibile,setVisibile] = useState(true);

    return (
        <div>
            <OrologioFiglio/>
        </div>
    )
}