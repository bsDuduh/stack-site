import React from 'react';
import '../../Style/Footer/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div id='footer_content'>
                <div id='footer_contacts'>
                    <h3>Nos Acompanhe</h3>
                    <div id='footer_social_media'>
                        <a href='#' className='footer-link'><img className='linkedin' src='/src/assets/linkedin.png' alt='LinkedIn' /><span class="social-media-text">@Stack</span></a>
                        <a href='#' className='footer-link'><img className='instagram' src='/src/assets/instagram.png' alt='Instagram' /><span class="social-media-text">@Stack</span></a>
                        <a href='#' className='footer-link'><img className='x' src='/src/assets/x.png' alt='X' /><span class="social-media-text">@Stack</span></a>
                        <a href='#' className='footer-link'><img className='facebook' src='/src/assets/facebook.png' alt='Facebook' /><span class="social-media-text">@Stack</span></a>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Entre em Contato</h3>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact" src="/src/assets/email.png" alt="Email" /><span>Stack@gmail.com</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact" src="/src/assets/telefone.png" alt="Telefone" /><span>0800 4002 8922</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact" src="/src/assets/sms.png" alt="SMS" /><span>SMS</span></a>
                    </div>
                    <div className="contact-item">
                        <a href="#" className="footer-link">
                            <img className="logo_contact" src="/src/assets/faq.png" alt="FAQ" /><span>FAQ</span>
                        </a>
                    </div>
                </div>

                <ul className='footer-list'>
                    <li>
                        <h3>Mapa do Site</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Sobre a Empresa</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nossos Valores</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Sobre Nossa Equipe</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Soluções</a>
                    </li>
                </ul>
            </div>
            <div id='footer_copyright'>
                <p>Stack 2022 &copy;</p>
            </div>
        </footer>

    );
}
