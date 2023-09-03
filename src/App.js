import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  //note que utilizamos um componente que criamos, através do import e marcamos ele
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
