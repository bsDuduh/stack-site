import '../../Style/Imagens/Imagens.css'
import logoEscrito from '../../src/assets/logo_escrita.png'
import seta from '../../src/assets/seta.png'
export default function Imagens({ src, alt, className }) {

    return (
        <div className="container">
            <img src={src} alt={alt} className={className} />
            <div className="Logo">
                <img src={logoEscrito} alt="logo escrito stack" />
                <span>Seja na impressão, no design ou no desenvolvimento de software, nossa equipe está pronta para transformar ideias em realidade.</span>
                <div className="seta">
                    <a href="#SobreNosID"><img src={seta} alt="seta" /></a>
                </div>

            </div>
        </div>
    );
} 