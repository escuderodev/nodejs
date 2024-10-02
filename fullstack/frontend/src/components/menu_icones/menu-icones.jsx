import './menu-icones.css';
import perfil from '../../imagens/perfil.svg';
import bag from '../../imagens/sacola.svg';

export const MenuIcones = () => {
    const icons = [perfil, bag]

    return (
        <ul className="list_icons_container">
            {icons.map((icon) => (
            <li className="icon"><img src={icon} alt="icone"/></li>
            ))}
        </ul>
    )
}