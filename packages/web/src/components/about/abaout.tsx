import React, { useEffect, useState } from 'react';
import { urlFor } from '../../api/sanityClient';
import { getDetailsInfo } from '@api/service';
import { Project } from '@customTypes/api';

export const About: React.FC = () => {

const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const result = await getDetailsInfo('about')
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
    <div>
      <h1>Projetos</h1>
      {projects.map((item, index) => (
        <li key={index}>
          <p>
            {item._id}
          </p>
          <p>
            {item.title}
          </p>
          <p>
            {item.description}
          </p>
          <img src={urlFor(item.image).width(200).url()}/>
        </li>
      ))} 
    </div>
  );

}