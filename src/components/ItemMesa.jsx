import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'

const ItemMesa = ({updateEstadoMesa, data}) => {

  const activarMesa=(id)=>{
    updateEstadoMesa(id, true)

  }
  return (
    <div className={`item_mesa ${data?.estado ? "mesa_disponible" : "mesa_ocupado"} `}  >
        {data?.nroMesa}
        <BsCheckCircleFill className='icon_active' color='#2A9D8F' size={28} onClick={()=>activarMesa(data?.id)} />
    </div>
  )
}

export default ItemMesa