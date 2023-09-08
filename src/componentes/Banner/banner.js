import { Fragment } from 'react';
import './Banner.css';
//Esse Banner js, é o componente
export const Banner = () => {
    // JSX (parece html, mas não é)
    return (
        <Fragment>
            <header className="banner">
                <img src="../imagens/banner.png" alt="O banner principal da página do Organo" />
            </header>
            <h1></h1>
        </Fragment>
    )
}
