import React, { useEffect, useState } from 'react';
import { Project } from '@customTypes/api';
import { getDetailsInfo } from '@api/service';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { urlFor } from '@api/sanityClient';
export const Projects: React.FC = () => {

  const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const result = await getDetailsInfo('project')
      setProjects(result);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  console.log(projects) 
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '70px' }}>
      <h1>Projetos</h1>
      {projects.map((item, index) => (
 
      <li key={index} style={{ display: 'flex', flexDirection: 'column', gap: '500px',}}>

        <Link to={`/projects/${item.slug?.current}`}> 
        <motion.p
         initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
         whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
         transition={{ duration: 1.2 }} // Duração da animação  
         viewport={{ once: true }}
   
        >
          {item._id}

        </motion.p>
        <motion.p
         initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
         whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
         transition={{ duration: 1 }} // Duração da animação
           viewport={{ once: true }}
     
        >
          {item.title}

        </motion.p>
        <motion.p
         initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
         whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
         transition={{ duration: 0.8}} // Duração da animação     
         viewport={{ once: true }}

        >
          {item.description}

        </motion.p>
        <motion.img 
         initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
         whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
         transition={{ duration: 0.6 }} // Duração da animação
         viewport={{ once: true }}    
         src={urlFor(item.image).width(300).url()}
         style={{ width: '300px'}}
        >
        </motion.img>
          {/* <p>
            {item._id}
          </p>
          <p >
            {item.title}
          </p>
          <p>
            {item.description}
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cumque, fuga error blanditiis explicabo velit expedita accusantium vero, vitae voluptate vel laboriosam nemo sint eaque totam! Consectetur natus molestiae reiciendis?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cumque, fuga error blanditiis explicabo velit expedita accusantium vero, vitae voluptate vel laboriosam nemo sint eaque totam! Consectetur natus molestiae reiciendis?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cumque, fuga error blanditiis explicabo velit expedita accusantium vero, vitae voluptate vel laboriosam nemo sint eaque totam! Consectetur natus molestiae reiciendis?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cumque, fuga error blanditiis explicabo velit expedita accusantium vero, vitae voluptate vel laboriosam nemo sint eaque totam! Consectetur natus molestiae reiciendis?</p>
          <img src={urlFor(item.image).width(200).url()}/> */}
          </Link>
        {/* </motion.li> */}
      </li>
      ))}
    </div>
  );
}