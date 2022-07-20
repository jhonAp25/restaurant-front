import { Button } from 'antd/lib/radio'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PageLogin = () => {
  return (
    <div>

        <Button><Navigate replace to="/mesa" > </Navigate>Ingresar  </Button>
    </div>
  )
}

export default PageLogin