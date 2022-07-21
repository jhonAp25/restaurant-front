import React,{useEffect , useState} from 'react'

import axios from 'axios';
import {url} from '../util/Constante'
import   toaster  from "react-hot-toast";


let MesaContext = React.createContext();
let {Provider, Consumer} = MesaContext;


const MesaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ mesa , setMesa] = useState([])
  //  const [evento , setEvento] =useState([])


    
/************************* P O S T *******************************/ 

  /*  const postClase= async (dat,idDisciplina, dateTime)=>{   
        await axios.post(url +'clase/realizar', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            mesa: dat.mesa,
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

      const getMesa=()=>{   
        axios.get(url +'mesa').then(({data})=>{
          setMesa(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


      
      const updateEstadoMesa=(idMesa, estado)=>{   
        axios.put(url +'mesa/updateEstado',{
            estado: estado,
            id: idMesa
          
        }).then(({data})=>{
          getMesa()
          toaster.success('Mesa actualizada')
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


   





    return(
        <Provider value={{mesa, getMesa, updateEstadoMesa}}>
        {children}
    </Provider>
    )
}



export  {MesaProvider, Consumer as MesaConsumer ,MesaContext};