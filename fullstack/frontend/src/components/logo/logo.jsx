import './logo.css'
import logo from '../../imagens/logo.svg'

export const Logo = () => {
    return (
        <div className="app_header_logo">
            <img src={logo} alt="logo da aplicação" className="logo_imagem"/>
            <p><strong>Alura<span>Books</span></strong></p>
        </div>
    )
}