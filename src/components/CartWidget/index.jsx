import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

export default function CartWidget() {
 //en el futuro sera definido dinamicamente 
  const contador=4;  
  return (
    <div className="carrito">
      <i>
        <FontAwesomeIcon icon={faCartShopping} />
      </i>
      <p>{contador}</p>
    </div>
  );
}
