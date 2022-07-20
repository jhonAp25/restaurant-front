import React from 'react'
import Header from '../components/Header'
import DividerCustom from '../components/DividerCustom';
import GridMesas from '../components/GridMesas';

const PageMesa = () => {
  return (
    <div>
        <Header></Header>
        <DividerCustom titulo={"Mesas Disponibles de Hoy"} />
        <GridMesas/>
    </div>
  )
}

export default PageMesa