import React, { useState } from "react";

import "../components/css/Card1.scss";


const Card1=(props)=>{
  console.log("here in card");
    console.log(props.images);

    return(
        <>
        <div className="card" >
          <div className="cardInside">
            <div className="overflow">
              <img src={props.images}/>
            </div>
            <div className="property">
              <h3>
                {props.name}
              </h3>
            </div>
          </div>
      </div>
        </>
    );
};

export default Card1;