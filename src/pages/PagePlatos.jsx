import React from 'react'
import { useParams } from 'react-router-dom'
import DividerCustom from '../components/DividerCustom'
import GridMesas from '../components/GridMesas'
import GridPlatos from '../components/GridPlatos'
import Header from '../components/Header'

const PagePlatos = () => {


  const params = useParams()
 
  return (
    <div>
        <Header/>
        <DividerCustom titulo={"Platos Disponibles de Hoy"} />
        <GridPlatos/>
    </div>
  )
}

export default PagePlatos