import Header from '../Components/Header/Header';
import Imagens from '../Components/Imagens/Imagens';
import Footer from '../Components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Imagens src='/src/assets/imgFundo.png' alt='fundo computador antigo' className={'Imagem1'}/>
      <Footer/>
    </div>
  );
}



