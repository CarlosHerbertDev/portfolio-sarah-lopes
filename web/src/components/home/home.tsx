import React, { useEffect, useState } from 'react';
import { urlFor } from '../../api/sanityClient';
import { getDetailsInfo } from '@api/service';
import { Project } from '@customTypes/api';
import { motion} from "framer-motion";

export const Home: React.FC = () => {
    const [homeInfo, setHomeInfo] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
useEffect(() => {
  const fetchHomeInfo = async () => {
    try {
      const result = await getDetailsInfo('home')
      setHomeInfo(result);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchHomeInfo();
  }, []);


  if (loading) {
      return <div>Carregando...</div>;
  }

  console.log(homeInfo);

  return (
      <div style={{ height: "200vh" }}> 
          <h1>Projetos</h1>
          <ul>
              {homeInfo.map((item, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
                      whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
                      transition={{ duration: 0.8 }} // Duração da animação
                      viewport={{ once: true }}
                  >
                      <p>{item._id}</p>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                      <img src={urlFor(item.image).width(300).url()} alt={item.title} />
                  </motion.div>
              ))}
          </ul>
      </div>
  );
};