import React from "react";
import './contenido.css';
import hoja from './hoja.png';
import vela from './vela.png';
import reconocimiento from './reconocimiento.png';
import Cards from "../Cards/Cards";

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
              
                <div className="img1">
                  <img src={hoja} alt=""/>
                  <h3> Vegano, libre de crueldad animal</h3>
                </div>

                <div className="img2">
                  <img src={vela} alt=""/>
                    <h3> Sin colorantes ni preservantes</h3>
                </div>

                <div className="img3">
                  <img src={reconocimiento} alt=""/>
                  <h3> Pedidos especiales</h3>
              </div>


                <Cards/>
            </div>

      </div>
      

      {/*SEGUNDA PARTE*/}
      <div className="segundaParte">
           {/* TEXTO*/}
            <div className="textoDescripcion">
                <p>Velas naturales, sensaciones naturales.</p>
                <p>Dejate envolver por los aromas y los colores de las velas naturales que estimulan tus sentidos
                </p>
            </div>
            
            <div className="elaborado">
                <p> Hecho en Bolivia</p>
            </div>
            {/*REDES SOCIALES */}
            <div className="redes">
                <p> SIGUENOS</p>
                <div className="logitoDeRedes">

                </div>
            </div>
            
            {/*DERECHOS DE AUTOR XD*/}
            <footer className="desarrolladores">
                <p>Esta pagina fue desarrollado por <a href="#">TechQueens</a></p>
            </footer>
      </div>

    </> 
  );
}

export default Contenido;