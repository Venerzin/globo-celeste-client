import React, { useEffect } from 'react';
import { To } from 'react-router-dom';
import './style.css';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar';
import Inventory from '../components/Inventory/Inventory';

const Container = styled.div`
  margin: 0 4rem 0;
`;

function Ficha() {

  return (
    <Container>
      <Header />
      <SideBar />

      <Inventory />
    </Container>
  );
}

export default Ficha;
