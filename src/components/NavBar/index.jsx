import React from "react";
import CartWidget from "../CartWidget";
import './NavBar.css';
import {NavLink} from 'react-router-dom';
//import {Link} from "react-router-dom"
export const NavBar = () => {
    return (
        <>
        
        <nav className="container">
                <div className="titulo">
                    <NavLink to='/'>Lotto</NavLink>
                </div>

                <ul className="menu">
                    <li><NavLink to='/categoria/vela'>Velas</NavLink></li>
                    <li><NavLink to='/categoria/jabones'>Jabones</NavLink></li>
                    <li><NavLink to='cart'><CartWidget/></NavLink></li>
                </ul>
                
        </nav>
        </>
    )
}

export default NavBar;