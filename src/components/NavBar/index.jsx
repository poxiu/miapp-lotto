import React from "react";
import CartWidget from "../CartWidget";
import './NavBar.css';
import {NavLink} from 'react-router-dom';
//import {Link} from "react-router-dom"
export const NavBar = () => {
    return (
        <>
        
            <nav>
                    <NavLink className="categoria" to='/'>LOTTO</NavLink>
                    {/*<NavLink className="categoria" to='/categoria/vela'>VELAS</NavLink>
                    <NavLink className="categoria" to='/categoria/jabones'>JABONES</NavLink>*/}
                    <NavLink className="categoria" to='/tienda'>TIENDA</NavLink>
                    <NavLink className="categoria" to='/about'>ABOUT</NavLink>
                    <NavLink className="categoria" to='/contacto'>CONTACTO</NavLink>
                    
            </nav>
                    
        </>
    )
}

export default NavBar;