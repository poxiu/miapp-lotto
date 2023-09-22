

import React from "react";
import './Cards.css';
/* 
import de imagenesss
*/
import hoja from '../imagenes/leaf-ios.png';
import vela from '../imagenes/vela.png';
import reconocimiento from '../imagenes/estrella.png';

export const Cards = () => {
    return (
        <>
        <div class="container">

            <div className="img1">
                <img src={hoja}alt=""/>
                <h3 className="texto-cards"> Vegano, libre de crueldad animal</h3>
            </div>

            <div className="img2">
                <img src={vela}alt=""/>
                <h3 className="texto-cards">
                    Sin colorantes ni preservantes</h3>
            </div>

            <div className="img3">
                <img src={reconocimiento}alt=""/>
                <h3 className="texto-cards">Pedidos especiales</h3>
            </div>
    
        </div>
        </>
    )
}

export default Cards;
