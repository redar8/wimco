import React from "react";
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons";

function Nav(){
    return (
    <div className="content">
    <nav className="navigation">
        <ul className="navigation-list">
            <li className="navigation-item"><a href="#" className="navigation-link">Properties</a></li>
            <li className="navigation-item"><a href="#" className="navigation-link">Articles</a></li>
            <li className="navigation-item"><a href="#" className="navigation-link">Calcuator</a></li>
            <li className="navigation-item"><a href="#" className="navigation-link">About</a></li>
            <li className="navigation-item"><a href="#" className="navigation-link">Contact</a></li>                
        </ul>
    </nav>
    <img src="images/logo.png" alt="Logo" className="logo" />
    <IconContext.Provider value={{ color:"#747B86", size:"2rem", className: "global-class-name" }}>
     <div className="search-box">
     <input type="text" name="search" className="search" placeholder="Search"/>
        <FiSearch />
        <a href="#" className="btn btn-primary">say hello!</a>
    <select name="lang" className="lang">
        <option value="En">En</option>
        <option value="Tr">Tr</option>
    </select>
    </div>
    </IconContext.Provider> 
    </div>)
}

export default Nav;