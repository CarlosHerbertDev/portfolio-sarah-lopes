import React, { useEffect, useState } from 'react';
import { client } from '../../../sanityClient';

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
    
    // Função para obter os dados de projetos
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const query = '*[_type == "project"]' // Consulta para pegar todos os documentos do tipo 'project'
        console.log(query)
        
        const result = await client.fetch<Project[]>(query);
      
      setProjects(result);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

    fetchProjects();
  }, []); // A função será chamada apenas uma vez, quando o componente for montado

  if (loading) {
    return <div>Carregando...</div>;
  }

  console.log(projects)
  

  return (
    <div>
      <h1>Projetos</h1>
      {/* <div> */}
        {/* {projects.map((project) => (
          <div key={project._id}>
            <h2>{project.project}</h2>
            <p>{project.description}</p>
            {project.image && (
              <img src={project.image.asset.url} alt={project.project} />
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};