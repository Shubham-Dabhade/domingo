import React from "react";
import "./css/Logo.scss";
import {
    Link
  } from "react-router-dom";


const Logo =(props)=>{
    return(
        <>
          <div href="#" className="data-card" onClick={props.onClicking} name={props.name} value={props.value1}>
            <Link to="/hotels">
                <img src={props.hotel.logo}  className="logoN" alt="" name={props.name} />
            </Link>
          </div>
        </>
    );
}

export default Logo;