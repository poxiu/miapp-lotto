import React from "react";
import { useCartContext } from "../../CartContext";
export const ItemCart = ({product}) => {
    const {RemoveProduct} = useCartContext();
    return (
        <div className="item-cart">
            <img src={product.image} alt={product.title}/>
            <p>titulo: {product.title}</p>
            <button onClick={() => RemoveProduct(product.id)}></button>

        </div>
    )
}

export default ItemCart;