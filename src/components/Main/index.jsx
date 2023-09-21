import React from 'react'
import "./main.css";
export const Main = () => {
    return (
    <>
    <div class="contenedor">
        {/*<!--Primera parte-->*/}
        <div class="primeraParte">        
            {/*<!--CONTENIDO CENTRAL-->*/}

                <div class="titulos">
                    <h1 id="nombre"> Lotto.</h1>
                    <h2 id="subTitulo"> Velas Artesanales Naturales </h2>    
                </div>
                
                <div class="conceptoCualidades">                
                    <div class="concepto">
                                    <p class="concepts">
                                        En Lotto, diseñamos momentos para ti alrededor de velas.
                                        Nuestras creaciones son honestas y respetuosas con tu ambiente, 
                                        elaboradas con cera de Soya listas para un momento mágico.
                                    </p>
                    </div>   

                    <div class="cualidades">
                        <div class="linea"></div> {/*lines */}

                        <p> <span class="numCualidad">01</span> Produccion artesanal responsable </p> {/*texto */}

                        <div class="linea"></div> {/*lines */}

                        <p> <span class="numCualidad">02</span> Cera 100% vegetal de soya </p> {/*texto */}

                        <div class="linea"></div> {/*lines */}

                        <p> <span class="numCualidad">03</span> Esencias Naturales</p> 
                        {/*texto */}
        
                        <div class="linea"></div> {/*lines */}

                    </div>
                </div>    
        </div>
    </div>
    </>
    )
}

export default Main;