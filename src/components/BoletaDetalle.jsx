import React from 'react'
import {Button, Divider} from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import toaster from 'react-hot-toast'


const BoletaDetalle = ({detalle, putPedido}) => {

    let total =  detalle.reduce((acum, detalle)=>(acum + detalle.plato.precio ),0)
    const mesaParams = useParams()
    const navigate = useNavigate()

    const EnvioPedido=()=>{
        if(total === 0){
            toaster.error("Agrege un plato ")
        }else{
            putPedido(total)
            navigate("../mesa", { replace: true });
        }
        
    }

  return (
    <div className='boleta_detalle'>
        <div> 
            <strong> Pedido  de la {mesaParams.mesaId}</strong>

        </div>

        <div className='boleta_pedido'>
            {detalle.map(d=>(
                <div className='' key={d.id} style={{display: 'flex' , justifyContent: 'space-between'}}>
                <span style={{letterSpacing: '2px'}}>{d.plato.nombre}</span>
                
                <span>S/. {d.plato.precio}.00</span>
                </div>
            ))}
            


        </div>


        <div style={{display: 'flex' , justifyContent: 'flex-end', marginTop: '2%'}}>
           
            <strong>S/. {total}.00</strong>

        </div>

        <div style={{display: 'flex' , justifyContent: 'center', marginTop: '2%'}}>
            <Button onClick={()=>EnvioPedido()}>Enviar Pedido</Button>
        </div>


    </div>
  )
}

export default BoletaDetalle