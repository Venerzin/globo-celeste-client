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
`;

function Login() {

    return <Container>
        <LoginForm />
    </Container>
}

export default Login;
