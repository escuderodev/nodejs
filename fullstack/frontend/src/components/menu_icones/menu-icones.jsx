import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import bag from '../../imagens/sacola.svg';

const MenuIconesContainer = styled.div`
    display: flex;
`

const Icon = styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 20px;
        cursor: pointer;
`

export const MenuIcones = () => {
    const icons = [perfil, bag]

    return (
        <MenuIconesContainer>
            {icons.map((icon) => (
            <Icon><img src={icon} alt="icone"/></Icon>
            ))}
        </MenuIconesContainer>
    )
}