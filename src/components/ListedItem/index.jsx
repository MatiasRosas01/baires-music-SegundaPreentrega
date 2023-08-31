import React from "react";
import placeholderImage from "../../img/placeholder.webp";
import "./index.css";
import { Link } from "react-router-dom";

export default function ListedItem({ instrumento, categorias }) {
  return (
    <div className="card">
      <img src={placeholderImage} className="itemImg" />
      <h2>{instrumento.nombre}</h2>
      <h2>{categorias[instrumento.categoria]}</h2>
      <h2>{instrumento.resumen}</h2>
      <h2>{instrumento.precio}</h2>
      <div className="button"><Link to={`/item/${instrumento.id}`}>Ver mas</Link></div>
    </div>
  );
}
