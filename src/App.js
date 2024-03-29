import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginProvider } from './context/LoginContext';
import { MesaProvider } from './context/MesaContext';
import { PedidoProvider } from './context/PedidoContext';
import { PlatoProvider } from './context/PlatoContext';
import PageLogin from './pages/PageLogin';
import PageMesa from './pages/PageMesa';
import PagePedido from './pages/PagePedido';
import PagePlatos from './pages/PagePlatos';
import Notificacion from './util/Notificacion';

function App() {
  return (
   
    <PedidoProvider>
    <MesaProvider>
      <PlatoProvider>
      
    <BrowserRouter>
    <LoginProvider>
    <Notificacion/>
    <Routes>
      <Route path='/' element={<PageLogin/>} />
      <Route path="/mesa" element={<PageMesa />} />
      <Route path="/mesa/:mesaId" element={<PagePlatos />} />
      <Route path='/mesa/:mesaId/:platoId' element={<PagePedido/>} />
      
      
      
    </Routes>
       
 </LoginProvider>
  </BrowserRouter>
 
  </PlatoProvider>
  </MesaProvider>
  </PedidoProvider>
  
  );
}

export default App;
