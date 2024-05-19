import React from "react";
import '../../Style/Imagens/Imagens.css'
import logoEscrito from '../../src/assets/logo_escrita.png'
import seta from '../../src/assets/seta.png'
export default function Imagens({ src, alt, className }) {

    return (
        <div className="container">
            <img src={src} alt={alt} className={className} />
            <div className="Logo">
                <img src={logoEscrito} alt="logo escrito stack" />
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <div className="seta">
                    <a href=""><img src={seta} alt="seta" /></a>
                </div>

            </div>
        </div>
    );
} 