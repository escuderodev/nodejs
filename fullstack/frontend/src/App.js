import './App.css';
import { Logo } from './components/logo/logo';
import { Menu } from './components/menu/menu';
import { MenuIcones } from './components/menu_icones/menu-icones';

function App() {
  return (
    <div className="app">
      <header className="app_header">
        <Logo/>
        <Menu/>
        <MenuIcones/>
      </header>
    </div>
  );
}

export default App;
