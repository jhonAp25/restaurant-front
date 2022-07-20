import React from 'react'
import {TiDeleteOutline} from  "react-icons/ti";
import { Divider } from 'antd';


const CardDetalle = ({data, deleteDetallePedido}) => {
    

    const DeletePlato=(id)=>{
        deleteDetallePedido(id)
    }


    


  return (
    <div className='card_detalle'>
        <div className='detalle_image'>
            <img alt="" srcSet={data.plato.image} />
        </div>
      
        <div className='detalle_descripcion'>
            <span style={{textTransform: 'capitalize'}} >{data.plato.nombre}</span>
          
            <strong>S/. {data.plato.precio}.00</strong>
        </div>
        <TiDeleteOutline className='icon_delete' size={25} color="#072f48b3" onClick={()=>DeletePlato(data.id)} />
    </div>
  )
}

export default CardDetalle