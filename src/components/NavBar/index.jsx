import React from "react";
import CartWidget from "../CartWidget";
import {ReactComponent as ReactLogo} from '../../img/Bairesvector.svg';
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../Dropdown";
import "./style.css";
import { Link } from "react-router-dom";



export default function NavBar() {

  return (
    <div className="colorNav">
    <Link to="/"><ReactLogo /></Link>
      <ul className="navList">
      <Link to="/"><li>Nosotros</li></Link>
       <div className="dropdown">
      <Dropdown />
    </div> 
      <Link to="/" className="buscar"><li>Buscar<FontAwesomeIcon icon={faMagnifyingGlass} /></li></Link>  
        </ul>
      <div className="carrito">
        <CartWidget />
      </div>
    </div>
  );
}
