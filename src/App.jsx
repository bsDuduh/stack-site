import Header from '../Components/Header/Header';
import Imagens from '../Components/Imagens/Imagens';
import Footer from '../Components/Footer/Footer';
import imagemFundo from '../src/assets/imgFundo.png'
import Linha from '../Components/Linha/Linha';
import SobreNos from '../Components/SobreNos/SobreNos';
import NossosValores from '../Components/NossosValores/NossosValores';
import CardPessoas from '../Components/CardPessoas/CardPessoas';
import NossasSolucoes from '../Components/NossasSolucoes/NossasSolucoes';
export default function App() {
  return (
    <div className="App">
      <Header/>
      <Imagens src={imagemFundo} alt='fundo computador antigo' className={'Imagem1'}/>
      <SobreNos/>
      <NossosValores/>
      <CardPessoas/>
      <Linha />
      <NossasSolucoes/>
      <Footer/>
    </div>
  );
}



