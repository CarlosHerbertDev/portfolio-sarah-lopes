import React, { useEffect, useState } from 'react';
import { Project } from '@customTypes/api';
import { getDetailsInfo } from '@api/service';
import { useParams } from 'react-router-dom';
import { urlFor } from '@api/sanityClient';

export const ProjectsDetails: React.FC = () => {

const [projects, setProjects] = useState<Project[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const { name } = useParams<string>()

console.log(name)

    
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const result = await getDetailsInfo('project')
        const details = result.filter((item: Project) => {
           return name === item.slug?.current
})
            setProjects(details)
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
      <h1>Projetos Details</h1>
      {projects.map((item, index) => (
        <li key={index}>
          <p>
            {item._id}
          </p>
          <p>
            {item. title}
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