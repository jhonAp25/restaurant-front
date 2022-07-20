import React from 'react'

const ItemPlato = ({data}) => {
  return (
    <div className='card_plato'>
        <div className='card_image'>
            <img srcSet={data.image} alt="" />
        </div>
        <div className='card_content'>
            <span className='title'>{data.nombre}</span>
            <p className='descripcion'>{data.descripcion}</p>
            <span className='precio'>S/. {data.precio}</span>
        </div>

    </div>
  )
}

export default ItemPlato