import Header from '../Components/Header/Header';
import Imagens from '../Components/Imagens/Imagens';
import Footer from '../Components/Footer/Footer';
import imagemFundo from '../src/assets/imgFundo.png'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Imagens src={imagemFundo} alt='fundo computador antigo' className={'Imagem1'}/>
      <Footer/>
    </div>
  );
}



