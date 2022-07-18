import React from 'react'

const ItemMesa = ({disponible}) => {
  return (
    <div className={`item_mesa ${disponible ? "mesa_disponible" : "mesa_ocupado"} `}  >
        MESA-01
    </div>
  )
}

export default ItemMesa