import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {

    //template string para melhorar a legibilidade do codigo
    const placeholderModificada = `${props.placeholder}...`;

    // let valor = 'Guilherme';
    
    //valor inicial(''), novo valor(qnd chama o useState)
    const [valor, setValor] = useState('Guilherme Serafim');

    const aoDigitado = (evento) => {
        setValor(evento.target.value);
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    );
};

//forma padrão de exportação - vamos seguir com essa abordagem
export default CampoTexto;