
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './CartContext/index';
export const CartContext = React.createContext([]);
//CartContext.Provider.value = {('Elva')}
console.log('CartContext', CartContext);
function App() {
  return (
    <>
    <BrowserRouter>

    <CartProvider>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;