import React from "react";
import { useCartContext } from "../../CartContext";
import "./ItemCart.css";
import BotonBorrar from "../BotonBorrar";
export const ItemCart = ({product}) => {
    const {RemoveProduct} = useCartContext();
    return (
        <div className="container">
            <div className="item-cart">
                <img src={product.image} alt={product.title}/>
                    <h2 className="titulo" >{product.title}</h2>
                    <div className="info-producto">
                        <p>cantidad: {product.cantidad}</p>
                        <p>Bs.- {product.price}</p>
                        <p>subtotal: {product.cantidad * product.price} Bs.-</p>
                    </div>
                    
                <button  className="boton-borrar" onClick={() => RemoveProduct(product.id)}><BotonBorrar/></button>
            </div>
        </div>
        
    )
}

export default ItemCart;