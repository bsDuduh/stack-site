import '../../Style/SobreNos/SobreNos.css';
import pc from '../../src/assets/pc.png';

export default function SobreNos() {
    return (
        <div className="contain" id='SobreNosID'>
            <div className="section-container">
                <section id='SobreNos' className="sobre-nos-container">
                    <h3>Sobre Nossa <span className='empresa'>EMPRESA</span></h3>
                    <span className='texto1'>O nome “Stack” foi cuidadosamente escolhido para refletir os valores e a visão da nossa empresa.</span>
                    <img src={pc} alt="computador com codigo escrito" />
                    <span className='texto2'>Tal como uma pilha de elementos de programação, a nossa empresa procura acumular soluções, conhecimentos e tecnologias para criar algo maior e mais poderoso do que a soma das suas partes individuais.</span>
                </section>
            </div>
        </div>
    );
}
