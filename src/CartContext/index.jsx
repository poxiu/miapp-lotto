import React, { Children, useState } from "react";
import { useContext } from "react";
import Cart from "../components/Cart";
export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const ClearCart = () => setCart([]);
    const IsInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const RemoveProduct = (id) => setCart(cart.filter(product => product.id !== id))
    const AddProduct = (item, cantidad) => {
        if(IsInCart(item.id) ){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad : product.cantidad + cantidad} : product
            } ))
        
    }else{
        setCart([...cart,{ ...item , cantidad: cantidad }]);
    }

}

const TotalPrice = () => {
    return cart.reduce((previo, actual) => previo + actual.cantidad * actual.price, 0);
}

const TotalProduct = () => {
    return cart.reduce ((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

}
    return(
        <CartContext.Provider value={{
            ClearCart, 
            IsInCart,
            RemoveProduct,
            AddProduct,
            TotalPrice,
            TotalProduct,
            cart
        }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;