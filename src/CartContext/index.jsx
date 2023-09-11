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
    return(
        <CartContext.Provider value={{
            ClearCart, 
            IsInCart,
            RemoveProduct,
            cart
        }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;