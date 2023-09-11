import React, { useContext } from "react";
import './Item.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/index";
export const Item = ({info}) => {
    const {nombre} = useContext(CartContext);
    console.log('item:', nombre);
    return (
        <>
        <Link to={`/detalle/${info.id}`} className="item">
        <div>
            <img src={info.image} />
            <p>{info.title}</p>
            <p>{info.description}</p>
        </div>
        </Link>
        
        </>
    )
}

export default Item;