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
        <div className="item-card">
            <img src={info.image} />
            
            <p>{info.title}</p>
            {/*<li><p>{info.description}</p></li>*/}
            <p>{info.price + ' ' + 'Bs.'}</p>
            
            
        </div>
        </Link>
        
        </>
    )
}

export default Item;