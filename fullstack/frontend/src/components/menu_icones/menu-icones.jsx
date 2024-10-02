import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import bag from '../../imagens/sacola.svg';

const MenuIconesContainer = styled.div`
    display: flex;

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 20px;
        cursor: pointer;
    }
`

export const MenuIcones = () => {
    const icons = [perfil, bag]

    return (
        <MenuIconesContainer>
            {icons.map((icon) => (
            <li className="icon"><img src={icon} alt="icone"/></li>
            ))}
        </MenuIconesContainer>
    )
}