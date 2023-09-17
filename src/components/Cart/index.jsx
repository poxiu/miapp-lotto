import React from "react";
import ItemCart from "../ItemCart";
import { useCartContext } from "../../CartContext";
import { Link } from "react-router-dom";
export const Cart = () => {
    const {cart, TotalPrice} = useCartContext();
    if (cart.length === 0) {
        return(<>
        <h1 className="message-carrito">No hay elementos en tu carrito</h1>
        <Link to='/'>Sigue comprando :)</Link>
        </>)
        }
    return(
        <>
        {cart.map(product => <ItemCart key={product.id} product={product}/>)}
        <p>Total:{TotalPrice()}</p>
        </>
    )
}

export default Cart;