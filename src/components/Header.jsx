import React from "react";
import Nav from "./Nav";
import Form from "./Form";
import Heading from "./Heading";

function Header (){
    
    return(
            <header className="header">
        <Nav />
        <div className="main-heading">
        <Heading />
        <Form />
        </div>
      
            </header>
    );
}

export default Header;
