import React from 'react';
import './style.css';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 

  background-color:  #2d2142;
`;

const BackgroundSolidColor = styled.div`
  background-color:  #0e071b;
  height: 100%;
  width: 50%;
  margin: 0 0 0 50%;
`;

function Login() {

    return <Container>
        <BackgroundSolidColor />
        <LoginForm />
    </Container>
}

export default Login;
