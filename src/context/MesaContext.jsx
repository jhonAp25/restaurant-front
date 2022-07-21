import React,{useEffect , useState} from 'react'

import axios from 'axios';
import {url} from '../util/Constante'



let MesaContext = React.createContext();
let {Provider, Consumer} = MesaContext;


const MesaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ mesa , setMesa] = useState([])
  //  const [evento , setEvento] =useState([])


    
/************************* P O S T *******************************/ 


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