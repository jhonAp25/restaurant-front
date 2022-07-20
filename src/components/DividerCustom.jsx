import React from 'react'
import { Divider , Button} from 'antd';
import { Link, useParams } from 'react-router-dom';


const DividerCustom = ({titulo , button}) => {
  let { mesaId } =useParams()



  return (
    <div>

     <Divider orientation="left" className='divider_custom' >{titulo} 
    {button}  
    </Divider>
  
    
   
  </div>
)
}

export default DividerCustom