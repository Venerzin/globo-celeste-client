import React, { useState } from 'react';
import './style.css';
import styled from 'styled-components';
import DiscordData from '../components/DiscordData/DiscordData';
import RegisterForm from '../components/RegisterForm';
import { IRegister } from '../interfaces/IRegister';

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

function Register() {

    const [stage, setStage] = useState(0);
    const [userData, setUserData] = useState<IRegister>({
        name: "",
        email: "",
        discordId: "",
        password: "",
    });

    function handleNameChange(name: string){
        setUserData({ ...userData, name });
    }

    function handleEmailChange(email: string){
        setUserData({ ...userData, email });
    }

    function handleDiscordIdChange(discordId: string){
        setUserData({ ...userData, discordId });
    }

    function handlePasswordChange(password: string){
        setUserData({ ...userData, password });
    }

    function nextStage(){
        setStage(stage+1);
    }

    function prevStage(){
        setStage(stage-1);
    }

    async function submitForm(){

        console.log(JSON.stringify(userData));


        const res = await fetch("http://24.199.106.1:3000/users", {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(userData),
        });

        const data = await res.json();
        console.log(data);
    }

    switch(stage){
        case 1:
            return (
                <Container> 
                    <BackgroundSolidColor />
                    <DiscordData password={userData.password} onPasswordChange={handlePasswordChange} next={submitForm} prev={prevStage}/>
                </Container>
            );
        default:
            return (
                <Container>
                    <BackgroundSolidColor />
                    <RegisterForm userData={userData} onNameChange={handleNameChange} onEmailChange={handleEmailChange}
                    onDiscordIdChange={handleDiscordIdChange} next={nextStage}/>
            </Container>
            );
    }  
}

export default Register;
