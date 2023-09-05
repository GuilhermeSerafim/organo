import './CampoTexto.css'

const CampoTexto = (props) => {

    //template string para melhorar a legibilidade do codigo
    const placeholderModificada = `${props.placeholder}...`;

    let valor = '';

    const aoDigitado = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={"Guilherme"} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    );
};

//forma padrão de exportação - vamos seguir com essa abordagem
export default CampoTexto;