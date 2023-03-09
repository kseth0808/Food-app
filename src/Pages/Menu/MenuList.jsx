import React from "react";

function MenuList(props){
    return(
        <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}> </div>
      <h1> {props.name} </h1>
      <p> ${props.price} </p>
    </div>
    )
}

export default MenuList;