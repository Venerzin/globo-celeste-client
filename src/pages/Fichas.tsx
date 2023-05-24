import React, { useEffect, useState } from 'react';
import './style.css';
import styled from 'styled-components';
import { IPlayer } from '../interfaces/IPlayer';
import { useParams } from 'react-router-dom';
import PlayersTable from '../components/PlayersTable/PlayersTable';

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
`;

function Fichas() {

  let { id } = useParams();
  let token = sessionStorage.getItem('token');

  const [fichas, setFichas] = useState<IPlayer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async (token: string) => {
      if(id){
        const res = await fetch(`https://globoceleste.com/players/list/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': token,
          },
        })

        const data : IPlayer[] = await res.json();
        setFichas(data);
      }
    }

    if(token !== null){
      fetchUser(token).then(() => {
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [id]);

  return <Container>
    <PlayersTable fichas={fichas}/>
  </Container>
}

export default Fichas;
