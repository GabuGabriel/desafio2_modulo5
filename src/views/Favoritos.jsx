import React from "react";
import { useImagenes } from "../components/Contexto/ImagenesContext";

export default function Favoritos() {
  const { imagenes } = useImagenes();

  const favoritos = imagenes.filter((imagen) => imagen.liked);

  return (
    <div className="containerFavoritas">
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        {favoritos.map((imagen) => (
          <div key={imagen.id}>
            <img src={imagen.url} alt={imagen.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}