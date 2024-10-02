import "./header.css";
import { Logo } from '../logo/logo';
import { Menu } from '../menu/menu';
import { MenuIcones } from '../menu_icones/menu-icones';

export const Header = () => {
  return (
    <header className="app_header">
      <Logo />
      <Menu />
      <MenuIcones />
    </header>
  );
};
