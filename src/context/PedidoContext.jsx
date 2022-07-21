import React,{ useState} from 'react'

import axios from 'axios';
import {url} from '../util/Constante'
import toaster from 'react-hot-toast'




let PedidoContext = React.createContext();
let {Provider, Consumer} = PedidoContext;

const PedidoProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ pedido , setPedido] = useState([])

    const [detalle, setDetalle] = useState([])
  //  const [evento , setEvento] =useState([])


    
/************************* P O S T *******************************/ 

    const postPedido= ()=>{   
         axios.post(url +'pedido', {
            total: 0
        }).then((response)=>{ 
         console.log(response);
 
        }).catch((error)=>{
          console.log(error);       
        })
    }   

    const putPedido= (total )=>{   
        axios.put(url +'pedido', {
           total: total,
           id: localStorage.getItem('idPedido')
       }).then((response)=>{ 
        console.log(response);
        localStorage.removeItem('idPedido')
        localStorage.removeItem('idMesa')
        
        toaster.success("Pedido enviado !!")
       }).catch((error)=>{
         console.log(error);       
       })
   }   


    const postDetallePedido= async (idPlato, idMesa)=>{   
        await axios.post(url +'detallePedido',{
            cantidad: 1,
            mesa: {id: idMesa},
            mozo: {id: 1},
            pedido: {id: localStorage.getItem('idPedido') ?? 0 },
            plato: {id: idPlato}
        }).then(({data})=>{
            
            console.log(data);
            localStorage.setItem('idPedido',data.pedido.id)
            getDetallePedido()
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }
      
     

    /********************** G E T -- S A L O N  ********************************* */

      const getPedido= async ()=>{   
        await axios.get(url +'pedido')
        .then(({data})=>{
          setPedido(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


      const getDetallePedido=()=>{
        axios.get(url+ 'detallePedido/filtro/'+ localStorage.getItem('idPedido') )
        .then(({data})=>{
            setDetalle(data);
            console.log(data);
          }).catch((error)=>{
          
            console.log(error.response);
            
          })
        }



        /*****************DELETE DETALLE************* */

        const deleteDetallePedido=(idDetalle)=>{
            axios.delete(url+ 'detallePedido/'+ idDetalle )
            .then(({data})=>{
              toaster('Pedido Eliminado!', {
                icon: '❌',
              });
                getDetallePedido()

              }).catch((error)=>{
              
                console.log(error.response);
                
              })
            }

     


   





    return(
        <Provider value={{pedido,detalle, getPedido, postPedido, postDetallePedido , getDetallePedido, deleteDetallePedido, putPedido}}>
        {children}
    </Provider>
    )
}



export  {PedidoProvider, Consumer as PedidoConsumer ,PedidoContext};