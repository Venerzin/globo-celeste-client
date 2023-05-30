import React, { useState } from "react";
import styled from "styled-components";

import LoginImage from "../../assets/login-image.svg";
import DragonImage from "../../assets/DragonDetail.png";

const Container = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: #fffafa;
    border-radius: 5%;
    position: fixed;

    display: flex;

    @media (max-width: 500px){
        height: auto;
    }
`;

const PasswordContainer = styled.div`
    margin: 0 0 1rem;
`;

const Logo = styled.img`
    width: 12rem;
    margin-top: 1.5rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 0 0 2.5rem;
    text-align: center;
    color: black;
    text-transform: uppercase;

    @media (max-width: 500px){
        font-size: 1.5rem;
    }
`;

const Input = styled.input`
    width: 25rem;
    height: 1.75rem;
    font-size: 1.25rem;

    @media (max-width: 500px){
        width: 100%;
    }
`;

const Label = styled.label`
    color: black;
    display: block;
    font-size: 1.25rem;
`;

const Button = styled.button`
    background-color: #0e071b;
    width: 30%;
    color: white;
    display: block;
    margin: 2rem auto 2rem;
    padding: 1rem 0;
    font-size: 1.25rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 500px){
        padding: 1rem 0;
        width: 40%;
    }
`;

const FormContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px){
        width: 100%;
    }
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    margin-top: 1.5rem;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const BackgroundSolidColor = styled.div`
    width: 50%;
    height: 100%;
    background-color: #2d2142;
    border-top-right-radius: 5%;
    border-bottom-right-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px){
        display: none;
    }
`

const Image = styled.img`
    width: 80%;
    margin: auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

    @media (max-width: 500px){
        width: 80%;
    }
`;

interface Props{
    password: string;
    onPasswordChange: (password: string) => void;
    next: () => void;
    prev: () => void;
}


function DiscordData({ password, onPasswordChange, prev, next}: Props){

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleConfirmPassword = (password: string) => {
        setConfirmPassword(password);
    }

    return <Container>
        <FormContainer>
            <Logo src={DragonImage}/>

            <Form>
            <Title>Escolha uma senha</Title>

            <PasswordContainer>
                <Label htmlFor="password">Senha: </Label>
                <Input id="password" type="password" value={password} onChange={(e) => onPasswordChange(e.target.value)}/>
            </PasswordContainer>

            <PasswordContainer>
                <Label htmlFor="passwordConfirm">Confirme a senha: </Label>
                <Input id="passwordConfirm" type="password" value={confirmPassword} onChange={(e) => handleConfirmPassword(e.target.value)}/>
            </PasswordContainer>

            <ButtonWrapper>
                <Button type="button" onClick={prev}>Voltar</Button>
                <Button type="button" onClick={next}>Registre-se</Button>
            </ButtonWrapper>
            </Form>
        </FormContainer>

        <BackgroundSolidColor>
            <Image src={LoginImage} alt="" />
        </BackgroundSolidColor>
    </Container>
}

export default DiscordData;