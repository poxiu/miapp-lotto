import React from "react";
import CartWidget from "../CartWidget";
import './NavBar.css';
import {NavLink} from 'react-router-dom';
//import {Link} from "react-router-dom"
export const NavBar = () => {
    return (
        <>
        
        <nav>
                    <NavLink to='/'>Lotto</NavLink>
                    <NavLink to='/categoria/vela'>Velas</NavLink>
                    <NavLink to='/categoria/jabones'>Jabones</NavLink>
                    <NavLink to='cart'><CartWidget/></NavLink>
        </nav>
        </>
    )
}

export default NavBar;