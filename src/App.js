import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageMesa from './pages/PageMesa';
import PagePlatos from './pages/PagePlatos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mesa" element={<PageMesa />}>
        <Route path="mesa" element={<PageMesa />}>
        <Route path="mesa/platos" element={<PagePlatos />} />

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
