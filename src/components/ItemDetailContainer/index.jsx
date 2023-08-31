import React, { useEffect, useState } from "react";
import placeholderImage from "../../img/placeholder.webp";
import { useParams } from "react-router-dom";
import "./index.css";

export default function ItemDetailContainer({ instrumentos, categorias }) {
  let { id } = useParams();
  let [instrumentoActual, setInstrumentoActual] = useState();

  useEffect(() => {
    if (id) {
      console.log(Number(id));
      const aux = instrumentos.find(
        (instrumento) => instrumento.id === Number(id)
      );
      console.log(aux);
      setInstrumentoActual(aux);
    }
  }, [id]);

  const renderItemCard = () => {
    if (instrumentoActual) {
      return (
        <div className="itemCard">
          <img src={placeholderImage} className="singleItemImg" />
          <div className="itemDetails">
            <p>{instrumentoActual.nombre}</p>
            <p>{categorias[instrumentoActual.categoria]}</p>
            <p>{instrumentoActual.detalles}</p>
            <p>{instrumentoActual.precio}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="categoriaTitulo">
        <p>{instrumentoActual && categorias[instrumentoActual.categoria]}</p>
      </div>
      {renderItemCard()}
    </div>
  );
}
