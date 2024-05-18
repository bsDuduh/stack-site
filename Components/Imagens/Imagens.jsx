import React from "react";
import '../../Style/Imagens/Imagens.css'

export default function Imagens({ src, alt}){

    return(
        <div className="container">

            <img src={src} alt={alt} className="Imagem1"/>
        </div>
    );
}