import './Colaborador.css'

//A vantagem é que quando batemos o olho nesse componente, ja sabemos que atributos ela vai passar as props
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador