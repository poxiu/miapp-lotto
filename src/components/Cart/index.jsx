import React from "react";
import ItemCart from "../ItemCart";
import { useCartContext } from "../../CartContext";
import { Link } from "react-router-dom";
export const Cart = () => {
    const {cart} = useCartContext();
    if (cart.length === 0) {
        return(<>
        <p>No hay elementos en tu carrito</p>
        <Link to='/'>Sigue comprando :)</Link>
        </>)
        }
    return(
        <>
        {cart.map(product => <ItemCart key={product.id} product={product}/>)}
        </>
    )
}

export default Cart;