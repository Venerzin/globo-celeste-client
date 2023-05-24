import React from "react";
import styled from "styled-components";

import LoginImage from "../../assets/login-image.svg";
import DragonImage from "../../assets/DragonDetail.png";
import { IRegister } from "../../interfaces/IRegister";

const Container = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: #fffafa;
    border-radius: 5%;
    position: fixed;

    display: flex;

`;

const EmailContainer = styled.div`
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
`;

const Input = styled.input`
    width: 25rem;
    height: 1.75rem;
    font-size: 1.25rem;
`;

const Label = styled.label`
    color: black;
    display: block;
    font-size: 1.25rem;
`;

const Button = styled.button`
    background-color: #0e071b;
    color: white;
    display: block;
    margin: 2rem auto 0;
    padding: 1rem 6rem;
    font-size: 1.25rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const FormContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const Image = styled.img`
    width: 80%;
    margin: auto;
`;

interface Props{
    userData: Omit<IRegister, "password">;
    onNameChange(name: string): void;
    onEmailChange(email: string): void;
    onDiscordIdChange(email: string): void;
    next(): void;
}

function RegisterForm({ userData, onNameChange, onEmailChange, onDiscordIdChange, next }: Props){

    return <Container>
        <FormContainer>
            <Logo src={DragonImage}/>

            <Form>
            <Title>Increva-se</Title>

            <EmailContainer>
                <Label htmlFor="name">Nome: </Label>
                <Input id="name" type="text" value={userData.name} onChange={(e) => onNameChange(e.target.value)} required={true}/>
            </EmailContainer>

            <EmailContainer>
                <Label htmlFor="email">Email: </Label>
                <Input id="email" type="email" value={userData.email} onChange={(e) => onEmailChange(e.target.value)} required={true}/>
            </EmailContainer>

            <EmailContainer>
                <Label htmlFor="discord">Discord ID: </Label>
                <Input id="discord" type="text" value={userData.discordId} onChange={(e) => onDiscordIdChange(e.target.value)} required={true}/>
            </EmailContainer>


            <Button type="button" onClick={next}>Proximo</Button>
            </Form>
        </FormContainer>

        <BackgroundSolidColor>
            <Image src={LoginImage} alt="" />
        </BackgroundSolidColor>
    </Container>
}

export default RegisterForm;