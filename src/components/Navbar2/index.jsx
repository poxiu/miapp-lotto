import React, {useState} from "react";
//import {NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/index";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './navbar.css'

export const NavBar2 = () => {

    const [click, setClick] = useState('Home');
    const handleClick = (option) => {
        setClick(option);
    };

    return (

        <nav className="nav"> 
                <div className="nav__brand">
                    <li
                        className={click==='Lotto' ? 'selected' :''} 
                        onClick={() => handleClick('Home')}
                    >
                        <NavLink className="nav__link" to='/'> Lotto </NavLink>
                    </li>
                </div>
                <ul  className="nav__list">
                    <li 
                        className={click==='Home' ? 'selected' :''} 
                        onClick={() => handleClick('Home')}> 

                        <NavLink className="nav__link" to='/' > HOME </NavLink>
                    </li>
                    <li
                        className={click==='Tienda' ? 'selected' :''} 
                        onClick={() => handleClick('Tienda')}>
                        <NavLink className="nav__link" to='/tienda'> TIENDA </NavLink>
                    </li>

                    <li
                        className={click==='About' ? 'selected' :''} 
                        onClick={() => handleClick('About')}>
                        <NavLink className="nav__link" to='/about'> ABOUT </NavLink>
                    </li>

                    <li
                        className={click==='Contacto' ? 'selected' :''} 
                        onClick={() => handleClick('Contacto')}>
                        <NavLink className="nav__link" to='/contacto'> CONTACTO </NavLink>                  
                    </li>

                    <li
                        className={click==='Carrito' ? 'selected' :''} 
                        onClick={() => handleClick('Carrito')}>
                        <NavLink className="nav__link" to='/cart'> <CartWidget /></NavLink>                  
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar2;