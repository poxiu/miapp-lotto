import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/index";
import {Link} from "react-router-dom";
export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);


    const onAdd = () =>{
        //console.log(`Compraste ${Cantidad} unidades`)
        setGoToCart(true);
    }
    return (
        <>
        <div className="content">
            <h1>{data.title}</h1>
            <img className="detail-img"src={data.image}/>
            <p>{data.description}</p>
        </div>
        {
            goToCart ? <Link to='/cart' >Finalizar compra</Link>
            :
            <ItemCount Initial={1} Stock={5} onAdd={onAdd}/>
            }

        </>
    )
}

export default ItemDetail;