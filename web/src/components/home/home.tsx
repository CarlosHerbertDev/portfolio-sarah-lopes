import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../api/sanityClient';

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
      const query = '*[_type == "project"]{_id, project, description, image}'
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
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  console.log(urlFor(projects[0]))
  

  return (
    <div>
      <h1>Projetos</h1>
      {projects.map((item) => (
        <li>
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