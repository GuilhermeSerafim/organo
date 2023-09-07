import { useState } from "react";
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  
  const [colaboradores, setColaboradores] = useState ([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação" />
      <Time nome="Frontend" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
