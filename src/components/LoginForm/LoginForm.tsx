import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ISession from "../../interfaces/ISession";

import LoginImage from "../../assets/login-image.svg";
import DragonImage from "../../assets/DragonDetail.png";

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

function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const authenticate = () => {

        const data = {
            email,
            password
        }

        fetch("https://globoceleste.com/sessions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data: ISession) => {
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("user_id", data.user.id);

            navigate(`/user/${data.user.id}`);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    }

    return <Container>
        <FormContainer>
            <Logo src={DragonImage}/>

            <Form>
            <Title>Bem vindo de volta</Title>

            <EmailContainer>
                <Label htmlFor="email">Email: </Label>
                <Input id="email" type="email" onChange={handleEmailChange} required={true}/>
            </EmailContainer>

            <PasswordContainer>
                <Label htmlFor="password">Password: </Label>
                <Input id="password" type="password" onChange={handlePasswordChange}/>
            </PasswordContainer>

            <Button onClick={authenticate} type="button">Entrar</Button>
            </Form>
        </FormContainer>

        <BackgroundSolidColor>
            <Image src={LoginImage} alt="" />
        </BackgroundSolidColor>
    </Container>
}

export default LoginForm;