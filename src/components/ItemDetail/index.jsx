import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/index";
import {Link} from "react-router-dom";
import { useCartContext } from "../../CartContext/index";
export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {AddProduct} = useCartContext();

    const onAdd = (cantidad) =>{
        //console.log(`Compraste ${Cantidad} unidades`)
        setGoToCart(true);
        AddProduct(data, cantidad)
    }
    return (
        <>
        <div className="content">

            <div className="img-desp">
                <img className="detail-img"src={data.image}/>

                <div className="Detalles">
                <h1 className="titulo">{data.title}</h1>
                <h3 className="description">{data.description}</h3>
                <h2 className="precio">{'Bs.-' + ' ' +  data.price}</h2>
                {
            goToCart ? <Link to='/cart' >Finalizar compra</Link>
            :
            <ItemCount Initial={1} Stock={5} onAdd={onAdd}/>
            }
                </div>
            </div>
        </div>
        

        </>
    )
}

export default ItemDetail;