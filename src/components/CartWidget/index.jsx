import React from "react";
import { useCartContext } from "../../CartContext/index";
export const CartWidget = () => {
    const {TotalProduct} = useCartContext();
    return (
        <>
            <i class="bi bi-cart4"></i>
            <span>{ TotalProduct() || ''}</span>
        </>
    )
}

export default CartWidget;