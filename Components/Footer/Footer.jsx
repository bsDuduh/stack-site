import '../../Style/Footer/Footer.css';
import sms from '../../src/assets/sms.png'
import facebook from '../../src/assets/facebook.png'
import instagram from '../../src/assets/instagram.png'
import linkedln from '../../src/assets/linkedin.png'
import faq from '../../src/assets/faq.png'
import email from '../../src/assets/email.png'
import tel from '../../src/assets/telefone.png'
import x from '../../src/assets/x.png'

export default function Footer() {
    return (
        <footer >
            <div id='footer_content'>
                <h3>Entre em Contato</h3>
                <div className="footer-contact">
                    <div className="contact-item">
                        <a href="mailto:stackinovacao@gmail.com" className="footer-link">
                            <img className="logo_contact"  alt="Email"  src={email}/><span>StackInovacao@gmail.com</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact"  alt="Telefone" src={tel}/><span>0800 4002 8922</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact" alt="SMS" src={sms}/><span>SMS</span></a>
                    </div>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact" alt="FAQ" src={faq} /><span>FAQ</span>
                        </a>
                    </div>
                </div>
                
                <ul className='footer-list'>
                    <li>
                        <h3>Mapa do Site</h3>
                    </li>
                    <li>
                        <a href="#SobreNosID" className="footer-link">Sobre a Empresa</a>
                    </li>
                    <li>
                        <a href="#NossosValores" className="footer-link">Nossos Valores</a>
                    </li>
                    <li>
                        <a href="#NossaEquipe" className="footer-link">Sobre Nossa Equipe</a>
                    </li>
                    <li>
                        <a href="#nossasSolu" className="footer-link">Soluções</a>
                    </li>
                </ul>

                <div id='footer_contacts'>
                    <h3>Nos Acompanhe</h3>
                        <div id='footer_social_media'>
                            <a href='https://www.linkedin.com/in/stack-inova%C3%A7%C3%A3o-009557311/' className='footer-link'><img className='linkedin' src={linkedln} alt='LinkedIn' /><span className="social-media-text"> @Stack </span></a>
                            <a href='https://www.instagram.com/stack_corp/' className='footer-link'><img className='instagram' src={instagram} alt='Instagram' /><span className="social-media-text"> @Stack </span></a>
                            <a href='https://x.com/stack_corp' className='footer-link'><img className='x' src={x} alt='X' /><span className="social-media-text"> @Stack </span></a>
                            <a href='https://www.facebook.com/profile.php?id=61560602637057&mibextid=ZbWKwL' className='footer-link'><img className='facebook' src={facebook} alt='Facebook' /><span className="social-media-text"> @Stack </span></a>
                        </div>
                </div>
                
            </div>
            <div id='footer_copyright'>
                <p>Stack 2024 &copy;</p>
            </div>
        </footer>
    );
}