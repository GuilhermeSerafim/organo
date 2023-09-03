import './CampoTexto.css'

const CampoTexto = (props) => {

    //template string para melhorar a legibilidade do codigo
    const placeholderModificada = `${props.placeholder}`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}></input>
        </div>
    );
};

//forma padrão de exportação - vamos seguir com essa abordagem
export default CampoTexto;