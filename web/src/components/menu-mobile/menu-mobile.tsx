import React, { useEffect, useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'
import { ConatinerHamburguer, MenuItem, MenuList, MenuWrapper } from "./stylle";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";

const MenuMobile: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false); 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);

  return (
    <>
      <ConatinerHamburguer>

    <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded/>
      </ConatinerHamburguer>
      <MenuWrapper $isOpen={isOpen}>
        <MenuList onClick={() => {setOpen(false)}}>

        <motion.div
             initial={{ opacity: 0, y: 20 }} // Começa invisível e deslocado
             whileInView={{ opacity: 1, y: 0 }} // Torna-se visível e retorna para a posição original
             transition={{ duration: 0.8 }} // Duração da animação
            >


          <MenuItem>
            
            <Link to ={`/`}>Home</Link>
         
        </MenuItem>
            
            
          <MenuItem>
       
            <Link to ={`/projects`}>Projects</Link>
        
          </MenuItem>
          <MenuItem>
         
            <Link to ={`/about`}>About</Link>
         
          </MenuItem>
            </motion.div>
        </MenuList>
      </MenuWrapper>
    </>
  );
};

export default MenuMobile;

