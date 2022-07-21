import React,{useEffect , useState} from 'react'
import axios from 'axios';
import {url} from '../util/Constante'
import toaster from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';




let LoginContext = React.createContext();
let {Provider, Consumer} = LoginContext;

const LoginProvider = ({children}) => {

    const navigate = useNavigate()
    
    /********* STATES ************ */
    const [ user , setUser] = useState([])


    /********************** G E T --P L A T O  ********************************* */

      const getLogin=(username , password)=>{   
        axios.get(url +'mozo/login/'+ username +'/' + password).then(({data})=>{
          setUser(data);
          navigate('/mesa')
        }).catch((error)=>{
         //console.log(error);
        toaster.error(error.response.data)
        })
      }

     


   





    return(
        <Provider value={{user, getLogin}}>
        {children}
    </Provider>
    )
}



export  {LoginProvider, Consumer as LoginConsumer ,LoginContext};