import React, { useContext, useEffect } from 'react'
import { Row , Col, Button  } from 'antd';
import DividerCustom from '../components/DividerCustom'
import Header from '../components/Header'
import CardDetalle from '../components/CardDetalle';
import BoletaDetalle from '../components/BoletaDetalle';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { PedidoContext } from '../context/PedidoContext';

const PagePedido = () => {


  const navigate = useNavigate()

  const {detalle , getDetallePedido, deleteDetallePedido, putPedido} = useContext(PedidoContext)



  useEffect(() => {

 
    getDetallePedido()
  }, []);


  return (
    <div>
        <Header/>
        <DividerCustom titulo={"Detalle Pedido"}  button={ <Button onClick={() => navigate(-1)} >  Agregar mas Platos </Button>} />
        <div style={{padding: '2%'}}>
          <Row gutter={[24]}>
              <Col className="gutter-row scroll" style={{padding : '2% 1% 0% 0%'}}  span={12}>

              <Row gutter={[0,16]}>
                {detalle.map(d=>(
                  <Col key={d.id} className="gutter-row" span={24}>
                    <CardDetalle data={d} deleteDetallePedido={deleteDetallePedido} />
                  </Col>
                ))}
 
              </Row>

              </Col>

              <Col  className="gutter-row "  span={12}>
               <BoletaDetalle detalle={detalle} putPedido={putPedido} />
              </Col>
          </Row>
        </div>

       
    </div>
  )
}

export default PagePedido