import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;

  .list_item {
    font-size: 1rem;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

export const Menu = () => {
  const listItemText = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

  return (
    <MenuContainer>
      {listItemText.map((item) => (
        <li className="list_item">
          <p>{item}</p>
        </li>
      ))}
    </MenuContainer>
  );
};
