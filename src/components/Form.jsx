import React from "react";
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons";

function Form (){
    return(
        <div>
        <h2 className="heading-form">Portugal Search Property</h2>
        <form action="" method="get" className="form-box">
         <div className="booking-box">
         <IconContext.Provider value={{ color:"#747B86", size:"2rem", className: "global-class-name" }}>
         <FiSearch />
         </IconContext.Provider>
         <input type="text" name="search" className="booking-input" placeholder="Search in Portugal"/>
            <select name="booking" className="booking-list">
            <option value="Apart">Apartment</option>
            <option value="Hotel">Hotel</option>
        </select>
        <a href="#" className="btn btn-secondary">Search</a>
         </div>
        </form>
        </div> 
    );
}

export default Form;