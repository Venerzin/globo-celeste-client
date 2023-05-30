import React, { useEffect, useState } from 'react';
import './style.css';
import styled from 'styled-components';
import { IPlayer } from '../interfaces/IPlayer';
import { useParams } from 'react-router-dom';
import PlayersTable from '../components/PlayersTable/PlayersTable';
import CreateFichaModal from '../components/CreateFichaModal';

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;

  @media (max-width: 500px){
    width: 90%;
  }
`;

const WrapperFichas = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0;
`;

const Title = styled.h1`
  font-size: 2.70rem;

  @media (max-width: 500px){
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  height: 3rem;
  width: 8rem;
  background-color: #2d2142;
  color: white;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
`;

const Message = styled.p`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 5rem;

  @media (max-width: 500px){
    padding: 0 3rem 0;
  }
`;

function Fichas() {

  let { id } = useParams();
  let token = sessionStorage.getItem('token');

  const [fichas, setFichas] = useState<IPlayer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {

    setShowModal(false);
  }

  useEffect(() => {
    const fetchUser = async (token: string) => {
      if(id){
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/players/list/${id}`, {
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

  if(fichas.length === 0){
    return <Container>
      <WrapperFichas>
        <Header>
          <Title>Fichas</Title>
          <Button onClick={() => setShowModal(true)}>Adicionar</Button>
        </Header>
        <BodyContainer>
          <Message>
            Clique no botão "Adicionar" para criar uma ficha!
          </Message>
        </BodyContainer>
      </WrapperFichas>

      <CreateFichaModal show={showModal} closeModal={closeModal}></CreateFichaModal>
    </Container>
  }

  return <Container>
    <WrapperFichas>
      <Header>
        <Title>Fichas</Title>
        
      </Header>
      <PlayersTable fichas={fichas}/>
    </WrapperFichas>

    <CreateFichaModal show={showModal} closeModal={closeModal}></CreateFichaModal>
  </Container>
}

export default Fichas;
