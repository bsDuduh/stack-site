import React from "react";
import '../../Style/Imagens/Imagens.css'
import logoEscrito from '../../src/assets/logo_escrita.png'
export default function Imagens({ src, alt, className}){

    return(
        <div className="container">
            <img src={src} alt={alt} className={className}/>
            <div className="Logo">
                <img src={logoEscrito} alt="logo escrito stack"/>
            </div>
        </div>
    );
} 