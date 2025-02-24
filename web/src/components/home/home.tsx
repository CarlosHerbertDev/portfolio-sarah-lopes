import React, { useEffect, useState } from 'react';
import { urlFor } from '../../api/sanityClient';
import { getDetailsInfo } from '@api/service';
import { Project } from '@customTypes/api';

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
  console.log(homeInfo)
  
  return (
    <div>
      <h1>Projetos</h1>
      {homeInfo.map((item, index) => (
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
};