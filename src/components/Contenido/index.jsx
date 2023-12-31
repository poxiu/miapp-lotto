import React from "react";
import './contenido.css';
import hoja from '../imagenes/leaf-ios.png';
import vela from '../imagenes/vela.png';
import reconocimiento from '../imagenes/estrella.png';
import Cards from "../Cards/Cards";
import Arrow from "../Arrow";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import SegundaParte from "../SegundaParte";

export const Contenido = () => {
  return (
    <>

      <div className="primeraParte">
        {/*CONTENIDO CENTRAL*/}             
          <div className="titulos">
            <h1 id="nombre">Lotto.</h1>
            <h2 id="subtitulo">Velas Artesanales Naturales</h2>
          </div>

          <div className="conceptoCualidades">
          
              <div className="concepto">
                <p className="concepts">
                  En Lotto, diseñamos momentos para ti alrededor de velas.
                  Nuestras creaciones son honestas y respetuosas con tu ambiente, 
                  elaboradas con cera de Soya listas para un momento mágico.
                </p>
              </div>   

              <div className="cualidades">
                  <div className="linea"></div>
                  <p> <span className="numCualidad"> 01</span> Produccion artesanal responsable </p>
                  <div className="linea"></div>
                  <p> <span className="numCualidad"> 02</span> Cera 100% vegetal de soya </p>
                  <div className="linea"></div>
                  <p> <span className="numCualidad" > 03</span> Esencias Naturales</p>
                  <div className="linea"></div>
              </div>
            </div>

            {/* BOTON DE COMPRA */}
            <div className="comprappp">
                <p> COMPRAR AHORA <i class="fa-solid fa-arrow-right-long"></i></p>
            </div>


            {/* IMAGENES */}


            <div className="cualidadesImagen">
                <div className="img-card">
                  <img src={hoja} alt=""/>
                  <br></br>
                  <br></br>
                  <h3> Vegano, <br></br>libre de crueldad animal</h3>
                </div>

                <div className="img-card">
                  <img src={vela} alt=""/>
                  <br></br>
                  <br></br>
                    <h3> Sin colorantes <br></br>Sin preservantes</h3>
                </div>

                <div className="img-card">
                  <img src={reconocimiento} alt=""/>
                  <br></br>
                  <br></br>
                  <h3> Pedidos <br></br>especiales</h3>
                </div>
            </div>
            {/*<Cards/>*/}
      </div>
      
      {/*<SegundaParte/>*/}
      <SegundaParte/>
      

    </> 
  );
}

export default Contenido;