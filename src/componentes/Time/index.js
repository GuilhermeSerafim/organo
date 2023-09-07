import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    
    // Define um objeto JavaScript para aplicar o estilo de fundo com base na cor secundária.
    // Esta é uma das formas de fazer isso, tornando o código mais legível.
    const css = {backgroundColor: props.corSecundaria};

    // A segunda forma é aplicar o objeto diretamente no JSX, por exemplo: 
    //{ borderColor: props.corPrimaria }.
    // Aqui, estamos definindo a cor da borda com base na propriedade corPrimaria.
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Colaborador/>
        </section>
    )
}

export default Time;