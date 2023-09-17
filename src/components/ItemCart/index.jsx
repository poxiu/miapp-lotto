import React from "react";
import { useCartContext } from "../../CartContext";
import "./ItemCart.css";
export const ItemCart = ({product}) => {
    const {RemoveProduct} = useCartContext();
    return (
        <div className="item-cart">
            <div>

            </div>
            <img src={product.image} alt={product.title}/>
            <div>
                <p>titulo: {product.title}</p>
            </div>
            
            <div>
                <p>cantidad: {product.cantidad}</p>
            </div>
            
            <div>
                <p>Bs.- {product.price}</p>
            </div>
            
            <div>
                <p>subtotal en Bs.- {product.cantidad * product.price}</p>
            </div>
            
            <div>
            <button className="boton-borrar"onClick={() => RemoveProduct(product.id)}></button>
            </div>
            

        </div>
    )
}

export default ItemCart;