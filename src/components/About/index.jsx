import React from "react";
import Num1 from './num1.png';
import Num2 from './num2.png';
import Num3 from './num3.png';

import './about.css';

export const About = () => {
    return (
        <div className="about">
            <h1 className="titulo"> ABOUT </h1>
            <div className="imagenes">
                  <img className="peque" src={Num1} alt=""/>
                  <img className="mediano" src={Num2} alt=""/>
                  <img className="peque" src={Num3} alt=""/>
            </div> 
            <p className="contexto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac elit sem. Suspendisse nisi lorem, vehicula id pellentesque in, sagittis eget augue. Nam venenatis libero elit, sed elementum tellus ullamcorper vel. Maecenas faucibus libero vitae orci hendrerit fermentum. Donec sit amet lectus mi.
            </p>   
        </div>
    );
}

export default About;