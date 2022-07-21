import React,{useEffect , useState} from 'react'

import axios from 'axios';
import {url} from '../util/Constante'




let PlatoContext = React.createContext();
let {Provider, Consumer} = PlatoContext;

const PlatoProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ plato , setPlato] = useState([])


    /********************** G E T --P L A T O  ********************************* */

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