import React from "react";
import Productdata from "../../Constants/Products";
import MenuList from "./MenuList";

function Menu(){
   return(
      <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
    {Productdata.map ((product)=>{
      return(
       <MenuList 
       name={product.name}
       image={product.image}
       price={product.price}
       />
       );
    })}
    </div>
    </div>
   )
}

export default Menu;