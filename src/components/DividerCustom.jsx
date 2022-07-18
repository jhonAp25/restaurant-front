import React from 'react'
import { Divider , Button} from 'antd';


const DividerCustom = ({titulo}) => {
  return (
    <div>

     <Divider orientation="left" className='divider_custom' >{titulo} </Divider>
  
    
   
  </div>
)
}

export default DividerCustom