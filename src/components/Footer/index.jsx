import React from "react";
import './Footer.css';
import GitHub from "../GitHub/GitHub";
export const Footer = () => {
    return (
        <>
        <footer className="footer-flex">

            <div className="slogan">
                <h1>Enjoy a magical experience through scent & sound.</h1>
            </div>

            <div className="social-medias">
            <p>SIGUENOS</p>
            <ul>
                <li><GitHub/><a href="#">Elva</a></li>
                <li><GitHub/><a href="#">Eudenia</a></li>
                <li><GitHub/><a href="#">Angie</a></li>
                <li><GitHub/><a href="#">Aracely</a></li>
            </ul>
            </div>

            <br/>

            <div className="derechos-autor">
            <p>Esta pagina fue desarrollado por <a href="#">TechQueens</a></p>
            </div>
            
        </footer>
            


        {/** <div className="segundaParte">

            <div className="textoDescripcion">
                <p>Velas naturales, sensaciones naturales.</p>
                <p>Dejate envolver por los aromas y los colores de las velas naturales que estimulan tus sentidos
                </p>
            </div>
            
            <div className="elaborado">
                <p> Hecho en Bolivia</p>
            </div>
            
            <div className="redes">
                <p> SIGUENOS</p>
                <div className="logitoDeRedes">

                </div>
            </div>
            
            
            <footer className="desarrolladores">
                <p>Esta pagina fue desarrollado por <a href="#">TechQueens</a></p>
            </footer>
      </div>*/}
        
        </>
    )
}

export default Footer;