import { Col, Input, Row, Button } from 'antd'
import React, { useContext, useState } from 'react'
import fondo_food from '../img/fondo_food.jpg'
import { LogoSvg } from '../util/LogoSvg'
import { AiOutlineUser} from 'react-icons/ai'
import { LoginContext } from '../context/LoginContext'
import toaster from 'react-hot-toast';
const PageLogin = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const {getLogin} = useContext(LoginContext)

  const login =(e)=>{
    if (username && password){
      getLogin(username, password)
    }else{
      toaster.error('Rellene los campos')
    }
   
   
  }
  return (
    <div>
            
            <div className='content_fondo'>
                <div className='fondo'></div>
                <img src={fondo_food} alt="" srcset="" className='imgFondo' />
            </div>
           
            
            <Row className='content_login'>
                <Col className='content_logo' span={12} >
                    <LogoSvg/>

                 
                </Col>

                <Col className='content_formulario_login' span={12} >
               
                    <div className='content-login '    >
                        <div className='content_title'>
                            <p className=' w-full text-center text_titulo_login'>LOGIN</p>
                        </div>

                        <div className='w-full ' style={{padding : '3%'}} >

                            <div className='content_input'>
                                <span className='text_normal font-semibold text-sm '>USUARIO</span>
                                <Input placeholder="Jhon Doe" prefix={<AiOutlineUser />}  onChange={(e)=>setUsername(e.target.value)} />
                              
                            </div>

                            <div className='content_input'>
                                <span className='text_normal font-semibold text-sm '>PASSWORD</span>
                                <Input.Password placeholder="input password" onChange={(e)=>setPassword(e.target.value)}  />
                               
                            </div>

                        </div>
                        <div className='' style={{padding : '3%'}}>
                            <Button className='w-full btn_primary p-2' onClick={()=>login()}>
                                      Ingresar
                            </Button>
                         
                        </div>
                        
                    </div>
                </Col>
            </Row>
        
    </div>
  )
}

export default PageLogin