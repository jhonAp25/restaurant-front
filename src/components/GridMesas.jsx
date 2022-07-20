import React, { useContext, useEffect } from 'react'

import { Row , Col} from 'antd';
import ItemMesa from './ItemMesa';
import { MesaContext } from '../context/MesaContext';
import { Link } from 'react-router-dom';



const GridMesas = () => {


  const {mesa, getMesa, updateEstadoMesa} = useContext(MesaContext)



  const escogerMesa=(id)=>{
    updateEstadoMesa(id, false)
    localStorage.setItem('idMesa', id)

    
  }

useEffect(() => {
  
  getMesa()

}, []);

  return (
    <div  className='scroll' style={{padding: '2%' }}>
        <Row gutter={[0, 48]}>
          {mesa.map(m=>(
            
              <Col key={m.id} className="gutter-row col_item_mesa"  span={4} onClick={()=>escogerMesa(m.id)} >
                {m.estado ? 
                <Link  to={m.nroMesa.toString()} >
                  <ItemMesa  data={m} updateEstadoMesa={updateEstadoMesa} />
                </Link>
               :
               
                  <ItemMesa  data={m} updateEstadoMesa={updateEstadoMesa} />
             
                }
               
              </Col>
           
          ))}

        </Row>
    </div>
  )
}

export default GridMesas