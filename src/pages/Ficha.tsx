import React from 'react';
import './style.css';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar';

const Container = styled.div`
  margin: 0 4rem 0;
`;

function Ficha() {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  );
}

export default Ficha;
