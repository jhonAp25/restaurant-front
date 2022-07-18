import React from 'react'

import { Row , Col} from 'antd';
import ItemMesa from './ItemMesa';

const GridMesas = () => {
  return (
    <div style={{padding: '2%'}}>
        <Row gutter={[0, 48]}>
      <Col className="gutter-row col_item_mesa"  span={4}>
        <ItemMesa disponible={true} />
      </Col>
      <Col className="gutter-row col_item_mesa" span={4}>
      <ItemMesa disponible={true}/>
      </Col>
      <Col className="gutter-row col_item_mesa" span={4}>
      <ItemMesa disponible={true}/>
      </Col>
      <Col className="gutter-row col_item_mesa" span={4}>
      <ItemMesa disponible={false}/>
      </Col>
      <Col className="gutter-row col_item_mesa" span={4}>
      <ItemMesa disponible={false}/>
      </Col>

      <Col className="gutter-row col_item_mesa" span={4}>
      <ItemMesa disponible={true}/>
      </Col>

      <Col className="gutter-row col_item_mesa" span={4}>
      <ItemMesa disponible={false}/>
      </Col>
    </Row>
    </div>
  )
}

export default GridMesas