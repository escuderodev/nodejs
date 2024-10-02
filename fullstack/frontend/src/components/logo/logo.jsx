import styled from 'styled-components';
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    gap: .5rem;
    font-size: 1.5rem;
    align-items: center;
    padding: .5rem;
    }
    
    span {
    color: #FD8325;
    }

    .logo_imagem {
    height: 40px;
    }
`

const LogoImage = styled.img`
    height: 40px;
`

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="logo da aplicação"/>
            <p><strong>Alura<span>Books</span></strong></p>
        </LogoContainer>
    )
}