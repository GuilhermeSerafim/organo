import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formulario from "./componentes/Formulario";

function App() {
  //note que utilizamos um componente que criamos, através do import e marcamos ele
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
    </div>
  );
}

export default App;
