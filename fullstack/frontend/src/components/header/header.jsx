import styled from 'styled-components';
import { Logo } from '../logo/logo';
import { Menu } from '../menu/menu';
import { MenuIcones } from '../menu_icones/menu-icones';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
      <MenuIcones />
    </HeaderContainer>
  );
};
