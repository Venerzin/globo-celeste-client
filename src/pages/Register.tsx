import React, { useState } from 'react';
import './style.css';
import styled from 'styled-components';
import PersonalData from '../components/PersonalData/PersonalData';
import DiscordData from '../components/DiscordData/DiscordData';
import Ficha from './Ficha';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

function Register() {

    const [stage, setStage] = useState(0);

    function nextStage(){
        setStage(stage+1);
    }

    function prevStage(){
        setStage(stage-1);
    }

    switch(stage){
        case 0: 
            return (
                <Container> 
                    <PersonalData next={nextStage}></PersonalData>
                </Container>
            );
        case 1:
            return (
                <Container> 
                    <DiscordData next={nextStage} prev={prevStage}></DiscordData>
                </Container>
            );
        default:
            return
    }  
}

export default Register;
