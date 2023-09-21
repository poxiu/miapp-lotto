

import React from "react";
import './Cards.css';
import hoja from "../imagenes/hoja.png";
import vela from "../imagenes/vela.png";
import reconocimiento from "../imagenes/reconocimiento.png";
export const Cards = () => {
    return (
        <>
        <div class="container">
            <div className="img1">
                <img src={hoja}alt="" width="200px"/>
                <h3> Vegano, libre de crueldad animal</h3>
            </div>

            <div>
                <img src={vela}alt="" width="200px"/>
                <h3>Sin colorantes ni preservantes</h3>
            </div>

            <div>
                <img src={reconocimiento}alt="" width="200px"/>
                <h3>Pedidos especiales</h3>
            </div>
    
        </div>
        </>
    )
}

export default Cards;
