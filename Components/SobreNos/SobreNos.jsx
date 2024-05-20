import '../../Style/SobreNos/SobreNos.css';
import pc from '../../src/assets/pc.png';

export default function SobreNos() {
    return (
        <div className="contain" id='SobreNosID'>
            <div className="section-container">
                <section id='SobreNos' className="sobre-nos-container">
                    <h3>Sobre Nossa <span className='empresa'>EMPRESA</span></h3>
                    <span className='texto1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <img src={pc} alt="computador com codigo escrito" />
                    <span className='texto2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </section>

            </div>
        </div>
    );
}
