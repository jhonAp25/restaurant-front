import React,{useEffect , useState} from 'react'

import axios from 'axios';
import {url} from '../util/Constante'




let PlatoContext = React.createContext();
let {Provider, Consumer} = PlatoContext;

const PlatoProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ plato , setPlato] = useState([])
  //  const [evento , setEvento] =useState([])


    
/************************* P O S T *******************************/ 

  /*  const postClase= async (dat,idDisciplina, dateTime)=>{   
        await axios.post(url +'clase/realizar', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            plato: dat.plato,
            trainer: dat.trainer,
            horaFin: dateTime.fechaFin,
            horaIni: dateTime.fechaIni,

        }).then((response)=>{
        
          toast.success('Nueva Clase  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }
*/

    /********************** G E T -- S A L O N  ********************************* */

      const getPlato= async ()=>{   
        await axios.get(url +'plato').then(({data})=>{
          setPlato(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

     


   





    return(
        <Provider value={{plato, getPlato}}>
        {children}
    </Provider>
    )
}



export  {PlatoProvider, Consumer as PlatoConsumer ,PlatoContext};