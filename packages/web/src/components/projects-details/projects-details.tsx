import React, { useEffect, useState } from 'react';
import { PrevNext, Project } from '@customTypes/api';
import { getDetailsInfo } from '@api/service';
import { Link, useParams } from 'react-router-dom';
import { urlFor } from '@api/sanityClient';

export const ProjectsDetails: React.FC = () => {

const [projects, setProjects] = useState<Project[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [teste, setTeste] = useState<PrevNext>({})
const { name } = useParams<string>()

console.log(name)

    
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const result = await getDetailsInfo('project')
        const details = result.filter((item: Project, index: number) => {
            item.position = index
            return name === item.slug?.current
        })

        console.log('detalhes', details)
        
      const position = details?.[0]?.position;

            setTeste({
                next: position !== undefined ? result?.[position + 1]?.slug?.current ?? '' : '',
                prev: position !== undefined ? result?.[position - 1]?.slug?.current ?? '' : '',
            })

            setProjects(details)
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

    fetchProjects();
  }, [name]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  console.log(projects)

  console.log('testando', teste);
  
  
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div>
            <div>
            <Link to={`/projects/${teste.prev}`}>
                <button 
                disabled={teste.prev === ''}
                style={{ padding: '10px', border: '1px solid black', borderRadius:'5px', cursor:'pointer'}}>
                   ⬅️ Anterior
                </button>
            </Link>
            </div>
            </div>
              <Link to={`/projects/${teste.next}`}>
                <button 
                disabled={teste.next === ''}
                style={{ padding: '10px', border: '1px solid black', borderRadius:'5px', cursor:'pointer'}}>
                  Proximo ➡️
                </button>
              </Link>
          </div>
    </div>
  );
}