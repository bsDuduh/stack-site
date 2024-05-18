import React from "react";
import '../../Style/Imagens/Imagens.css'

export default function Imagens({ src, alt, className}){

    return(
        <div className="container">
            <img src={src} alt={alt} className={className}/>
            <div className="Logo">
                <img src="../../src/assets/logo_escrita.png" alt="logo escrito stack"/>
            </div>
        </div>
    );
} 