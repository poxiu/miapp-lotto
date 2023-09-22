
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './CartContext/index';
import Cards from './components/Cards/Cards';
import ItemDetail from './components/ItemDetail';
import NavBar2 from './components/Navbar2';
import Contenido from './components/Contenido';
import About from './components/About';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
export const CartContext = React.createContext([]);
//CartContext.Provider.value = {('Elva')}
console.log('CartContext', CartContext);
function App() {
  return (
    <>
    <BrowserRouter>

    <CartProvider>
    <NavBar2/>
      <Routes>
        <Route path="/" element={<Contenido/>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        <Route path="/tienda" element={<ItemListContainer/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </CartProvider>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
