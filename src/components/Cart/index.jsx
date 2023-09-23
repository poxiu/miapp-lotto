import React from "react";
import ItemCart from "../ItemCart";
import { useCartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
export const Cart = () => {
    const {cart, TotalPrice} = useCartContext();
    if (cart.length === 0) {
        return(<>
        <div className="container-flex">
            <h1>No hay elementos en tu carrito</h1>
                <Link to='/'>Sigue comprando :)</Link>
        </div>
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