import React, { useEffect, useState } from 'react';
import { Project } from '@customTypes/api';
import { getDetailsInfo } from '@api/service';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Projetos</h1>
      {projects.map((item) => (
        <li key={item._id}>
          <Link to={`/projects/${item.slug?.current}`}>
          {/* <p>
            {item._id}
          </p> */}
          <p>
            {item.title}
          </p>
          <p>
            {item.description}
          </p>
          {/* <img src={urlFor(item.image).width(200).url()}/> */}
          </Link>
        </li>
      ))}
    </div>
  );
}