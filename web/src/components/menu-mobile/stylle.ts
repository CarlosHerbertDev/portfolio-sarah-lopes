import styled from "styled-components";

export const MenuWrapper = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: red;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
  z-index: 1;
  padding: 20px;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

export const MenuItem = styled.li`
  color: orange;
  font-size: 20px;
  margin: 10px 0;
  text-decoration: none;
`;

export const ConatinerHamburguer = styled.div `
    z-index: 2;
    width: 48px;
    height: 40px;
    display: flex;
    ustify-content: center;
    align-items: center;
    border: 1px solid #000;
     border-radius: 5px; 
`