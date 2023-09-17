import React, { useState } from "react";
import './ItemCount.css';
export const ItemCount = ({Initial, Stock, onAdd}) => {
    const [Count, SetCount] = useState(Initial)

    const suma = () => {
        SetCount(Count +1)
    }

    const resta = () => {
        SetCount(Count -1)
    }
    return (
        <>
            <div className="counter">
                <button className="botones" disabled={Count<=0} onClick={resta}> - </button>
                <span> {Count} </span>
                <button className="botones" disabled={Count>Stock} onClick={suma}> + </button>
            </div>

            <div>
                <button className="bolsa"disabled={Stock<=0} onClick={()=>onAdd(Count)}>AGREGAR A BOLSA</button>
            </div>
        </>
    )
}

export default ItemCount;