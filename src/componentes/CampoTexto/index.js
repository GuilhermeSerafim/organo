import './CampoTexto.css'

const CampoTexto = (props) => {

    //template string para melhorar a legibilidade do codigo
    const placeholderModificada = `${props.placeholder}...`;

    // let valor = 'Guilherme';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    );
};

//forma padrão de exportação - vamos seguir com essa abordagem
export default CampoTexto;