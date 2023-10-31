import '../App.css'
import React from "react";
import { useImagenes } from "../components/Contexto/ImagenesContext";
import Heart from '../components/Heart';
import "../components/galeria.css"

export default function Home() {
    const { imagenes, toggleLike } = useImagenes();

    return (
        <>
         
            <div className="containerhome">    
            <h1>Natural Pic</h1>
                <div className="galeria grid-columns-4 p-3">
                    {imagenes.map((imagen) => (
                        <div class="card" style={{ width: "18rem", height:"18rem" }} key={imagen.id} >
                            <img className="galeria foto" class="card-img-top" src={imagen.src.tiny} alt={imagen.alt} />
                            <div class="card-body ">
                                <h5 class="card-title">{imagen.photographer} </h5>
                                <Heart className="galeria foto svg" filled={imagen.liked} onClick={() => toggleLike(imagen.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}