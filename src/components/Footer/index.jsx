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
            

        </>
    )
}

export default Footer;