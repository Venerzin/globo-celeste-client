import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import SideBar from '../components/SideBar';
import Inventory from '../components/Inventory/Inventory';
import LifeContent from '../components/LifeContent/LifeContent';
import Characteristics from '../components/Characteristics/Characteristics';

import './style.css';
import { IPlayer } from '../interfaces/IPlayer';
import MagicsModal from '../components/MagicsModal/MagicsModal';
import { IClass } from '../interfaces/IClasses';

import { usePlayerStore } from '../store/player';
import useAutosave from '../hooks/useAutoSave';

const Container = styled.div`
  margin: 0 4rem 0;

  @media (max-width: 375px){
    margin: 0 1rem 0;
  }
`;

const BodyWrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas: "sidebar sidebar playerinfo playerinfo playerinfo textfield textfield";
    margin: 2rem auto 2rem;

    @media (max-width: 375px){

        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const PaginationButton = styled.button`
  padding: 1rem;
  background-color: #0e071b;
  border-radius: 5px;
  border: 2px solid #666666;
  color: white;
`;

const PaginagtionWrapper = styled.div`
  padding: .75rem 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 1360px){
    display: none;
  }
`;

const OpenMagicButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 5rem;
    height: 5rem;
    border: solid 2px #666666;
    border-radius: 50%;
    cursor: pointer;
    background-color: #0e071b;
    color: white;
    font-weight: bolder;

    z-index: 100;

    @media(max-width: 375px){
        bottom: 20px;
        right: 30px;
    }
`;

function Ficha() {

  let { id } = useParams();
  let token = sessionStorage.getItem('token');

  const {state: user, actions: userActions} = usePlayerStore((store) => store);

  const [classes, setClasses] = useState<IClass[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [pagination, setPagination] = useState(0);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const fetchUser = async (token: string) => {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/players/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        },
      })

      const data : IPlayer = await res.json();
      
      userActions.updateUser(data);
      
    }

    fetch(`${process.env.REACT_APP_BASE_URL}/admin/class`, {
        method: 'GET',
    }).then(async (res) => {
        const data: IClass[] = await res.json();

        setClasses([...data]);
    });


    if(token !== null){
      fetchUser(token).then(() => {
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  function handleClickNextPage(){
    
    if(pagination < 3){
      let page = pagination + 1;

      setPagination(page);
    }
  }

  function handleClickPreviousPage(){
    if(pagination > 0){
      let page = pagination - 1;

      setPagination(page);
    }
  }

  function handleOpenModal(){

    document.body.style.overflow = "hidden";
    setshow(true);
  }

  function handleCloseModal(){
    document.body.style.overflow = "auto";
    setshow(false);
  }

  useAutosave(() => {

    if(token){
      fetch(`${process.env.REACT_APP_BASE_URL}/players/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        },
        body: JSON.stringify(user),
      }).then(res => res.json())
      .then(user => console.log(user));
    }
  }, 30 * 1000)

  if(!isLoading && user.id !== ""){

    if(width < 500){

      switch (pagination) {

        case 0:
          return (
            <Container>
              <Header classes={classes} />

              <PaginagtionWrapper>
                <PaginationButton onClick={handleClickPreviousPage}>Anterior</PaginationButton>
                <PaginationButton onClick={handleClickNextPage}>Proximo</PaginationButton>
              </PaginagtionWrapper>
      
              <BodyWrapper>
                <SideBar />
              </BodyWrapper>

              <MagicsModal width={width} show={show} closeModal={handleCloseModal} dbMagics={user.magics}></MagicsModal>

              <OpenMagicButton onClick={handleOpenModal}>Magias</OpenMagicButton>
            </Container>
          );
        case 1:
          return (
            <Container>
    
              <Header classes={classes} />

              <PaginagtionWrapper>
                <PaginationButton onClick={handleClickPreviousPage}>Anterior</PaginationButton>
                <PaginationButton onClick={handleClickNextPage}>Proximo</PaginationButton>
              </PaginagtionWrapper>
      
              <BodyWrapper>
                <LifeContent/>
              </BodyWrapper>

              <MagicsModal width={width} show={show} closeModal={handleCloseModal} dbMagics={user.magics}></MagicsModal>

              <OpenMagicButton onClick={handleOpenModal}>Magias</OpenMagicButton>
            </Container>
          );

          case 2:
            return (
              <Container>
                <Header classes={classes} />

                <PaginagtionWrapper>
                  <PaginationButton onClick={handleClickPreviousPage}>Anterior</PaginationButton>
                  <PaginationButton onClick={handleClickNextPage}>Proximo</PaginationButton>
                </PaginagtionWrapper>
        
                <BodyWrapper>
                  <Characteristics/>
                </BodyWrapper>

                <MagicsModal width={width} show={show} closeModal={handleCloseModal} dbMagics={user.magics}></MagicsModal>

                <OpenMagicButton onClick={handleOpenModal}>Magias</OpenMagicButton>
              </Container>
            );

          case 3:
            return (
              <Container>
      
                <Header classes={classes} />

                <PaginagtionWrapper>
                  <PaginationButton onClick={handleClickPreviousPage}>Anterior</PaginationButton>
                  <PaginationButton onClick={handleClickNextPage}>Proximo</PaginationButton>
                </PaginagtionWrapper>
        
                <BodyWrapper>
                  <Inventory />
                </BodyWrapper>

                <MagicsModal width={width} show={show} closeModal={handleCloseModal} dbMagics={user.magics}></MagicsModal>

                <OpenMagicButton onClick={handleOpenModal}>Magias</OpenMagicButton>
              </Container>
            );
      }
    }


    return (
      <Container>
        <Header classes={classes} />

        <BodyWrapper>
          <SideBar />
          <LifeContent/>
          <Characteristics />
        </BodyWrapper>

        <Inventory />

        <MagicsModal width={width} show={show} closeModal={handleCloseModal} dbMagics={user.magics}></MagicsModal>

        <OpenMagicButton onClick={handleOpenModal}>Magias</OpenMagicButton>
      </Container>
    );
  }
  
  return <h1>CARREGANDO</h1>;
}

export default Ficha;
