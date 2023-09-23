import React from "react";
import Footer from "../Footer";
import './Contacto.css';

export const Contacto = () => {
    return (
        <>
            <div className="contacto">
                <h1 className="titulo"> Contacto </h1>
                <p className="sutitulo"> Please fill out the form below to send us an email.</p>
                <p className="contexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="correo" href="mailto:elvaizumi+lotto@gmail.com">elvaizumi+lotto@gmail.com</a>
                <Footer/>
            </div>

        </>       
    );
}

export default Contacto;