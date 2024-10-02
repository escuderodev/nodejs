import './menu.css'

export const Menu = () => {
    const listItemText = ['CATEGORIAS','MINHA ESTANTE','FAVORITOS']
    
    return (
        <ul className="list_container">
          {listItemText.map((item) => (
            <li className="list_item"><p>{item}</p></li>
          ))}
        </ul>
    )
}