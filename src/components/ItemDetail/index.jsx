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
        <div className="cajita-suprema">
            <div className="cajita-izquierda">
                <img className="detail-img" src={data.image}/>
            </div>
            <div className="cajita-derecha">
                <h1 className="titulo">{data.title}</h1>
                            <h3 className="description">{data.description}</h3>
                            <h2 className="precio">{'Bs.-' + ' ' +  data.price}</h2>
                            <div className="boton-invisible">
                                {
                                    goToCart ? <Link to='/cart'>Finalizar compra</Link>
                                    :
                                    <ItemCount className="item-count-details"Initial={1} Stock={5} onAdd={onAdd}/>
                                    }
                            </div>
            </div>
        </div>
                    {/*<img className="detail-img"src={data.image}/>
                    <h1 className="titulo">{data.title}</h1>
                    <h3 className="description">{data.description}</h3>
                    <h2 className="precio">{'Bs.-' + ' ' +  data.price}</h2>
                            {
                            goToCart ? <Link to='/cart' className="boton-finalizar">Finalizar compra</Link>
                            :
                            <ItemCount className="item-count-details"Initial={1} Stock={5} onAdd={onAdd}/>
                            }*/}
        </>
    );
}

export default ItemDetail;