import React, { useEffect, useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'
import { ConatinerHamburguer, MenuItem, MenuList, MenuWrapper } from "./stylle";


// Tipagem para o props do MenuWrapper

// Estilos para o menu e animação

// const HamburgerWrapper = styled.div`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   z-index: 11; 
// `;

const MenuMobile: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false); // Tipagem do estado 'isOpen'

  useEffect(() => {
    if (isOpen) {
      // Desabilitar o scroll no body quando o menu estiver aberto
      document.body.style.overflow = "hidden";
    } else {
      // Restaurar o scroll quando o menu estiver fechado
      document.body.style.overflow = "auto";
    }

    // Limpeza do efeito quando o componente for desmontado
    return () => {
      document.body.style.overflow = "auto"; // Garantir que o scroll esteja ativado
    };
  }, [isOpen]);

  return (
    <>
      {/* Colocando o ícone dentro da barra lateral */}
      <ConatinerHamburguer>

    <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded/>
      </ConatinerHamburguer>
      <MenuWrapper $isOpen={isOpen}>
        <MenuList>
          <MenuItem>item1</MenuItem>
          <MenuItem>item2</MenuItem>
          <MenuItem>item3</MenuItem>
        </MenuList>
      </MenuWrapper>
    </>
  );
};

export default MenuMobile;

