import React, { useEffect, useState } from 'react';
import { urlFor } from '../../api/sanityClient';
import { getDeatisProject } from '@api/service';

interface Project {
  _id: string;
  project: string;
  description: string;
  image: {
  asset: {
      url: string;
      };
  };
}


export const Home: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const result = await getDeatisProject()
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

  return (
    <div>
      <h1>Projetos</h1>
      {projects.map((item, index) => (
        <li key={index}>
          <p>
            {item._id}
          </p>
          <p>
            {item.project}
          </p>
          <p>
            {item.description}
          </p>
          <img src={urlFor(item.image).width(200).url()}/>
        </li>
      ))}
    </div>
  );
};