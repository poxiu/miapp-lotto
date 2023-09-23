import React from "react";
import Redes from "../Redes";
import Footer from "../Footer";
import "./segundaParte.css";
export const SegundaParte = () => {
    return (        
        <div className="segundaP">
            {/* TEXTO*/}
            <div className="textoDescripcion">
                <p>Velas naturales, sensaciones naturales.</p>
                <p>Dejate envolver por los aromas y los colores de las velas naturales que estimulan tus sentidos</p>
            </div>
                    
            <div className="elaborado">
                <p> Hecho en Bolivia</p>
            </div>
                {/*REDES SOCIALES */}
            <div className="redes">
                <p> SIGUENOS</p>
                <div className="logitoDeRedes">
                    <Redes />
                </div>
            </div>
                
            <Footer />
        </div>          
    );
}

export default SegundaParte;