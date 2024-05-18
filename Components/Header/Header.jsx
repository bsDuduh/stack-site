import '../../Style/Header/Header.css';
import menuAberto from "../../src/assets/menu.png"
import menuOculto from "../../src/assets/close.png"
import logo from "../../src/assets/imgIcone.png"
export default function Header() {
    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        let icon = document.querySelector('.icon');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            icon.src = menuAberto;
        } else {
            menuMobile.classList.add('open');
            icon.src = menuOculto ;
        }
    }

    return (
        <header>
            <nav className="navbar">
                <div>
                    <img className='logo' src={logo} alt="Logo" />
                </div>
                <div className="navlist">
                    <ul>
                        <li className="navitem"><a href="#" className="navlink">Sobre A Empresa</a></li>
                        <li className="navitem"><a href="#" className="navlink">Nossos Valores</a></li>
                        <li className="navitem"><a href="#" className="navlink">Sobre Nossa Equipe</a></li>
                        <li className="navitem"><a href="#" className="navlink">Soluções</a></li>
                        <li className="navitem"><a href="#" className="navlink-contato">Contato</a></li>
                    </ul>
                </div>
                <div className='mobile-menu-icon'>
                    <button onClick={menuShow}><img className='icon' src={menuAberto} alt='Menu Icon' /></button>
                </div>
            </nav>
            <div className='mobile-menu'>
                <ul>
                    <li className="navitem"><a href="#" className="navlink">Sobre A Empresa</a></li>
                    <li className="navitem"><a href="#" className="navlink">Nossos Valores</a></li>
                    <li className="navitem"><a href="#" className="navlink">Sobre Nossa Equipe</a></li>
                    <li className="navitem"><a href="#" className="navlink">Soluções</a></li>
                    <li className="navitem"><a href="#" className="navlink-contato">Contato</a></li>
                </ul>
            </div>    
        </header>
    );
}
