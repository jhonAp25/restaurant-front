import React, { useContext, useEffect } from 'react'
import { PlatoContext } from '../context/PlatoContext'
import { Row , Col} from 'antd';
import ItemPlato from './ItemPlato';
import { Link } from 'react-router-dom';
import { PedidoContext } from '../context/PedidoContext';
import toaster from 'react-hot-toast'

const GridPlatos = () => {

    
  const {plato, getPlato} = useContext(PlatoContext)
  const {postPedido, postDetallePedido} = useContext(PedidoContext)
  

  const agregarPlato=(idPlato)=>{
    postDetallePedido(idPlato , localStorage.getItem('idMesa') )

    toaster.success('Plato Agregado')
  }


  useEffect(() => {

    getPlato()
  
  }, []);

  return (
    <div className='scroll' style={{padding: '2%'}}>
        <Row gutter={[16, 48]}>
          {plato.map(m=>(
            
              <Col key={m.id} className="gutter-row "  span={4} onClick={()=>agregarPlato(m.id)} >
                <Link  to={m.id.toString()} >
                  <ItemPlato data={m} />
                </Link>
              </Col>
           
          ))}

        </Row>

    </div>
  )
}

export default GridPlatos