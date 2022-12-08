import React, { useState } from "react";
import styled from "styled-components";
import ISession from "../../interfaces/ISession";

const Container = styled.div`
    width: 1000px;
    height: 700px;
    background-color: #0e071b;
    border-radius: 5%;
    border: 2px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmailContainer = styled.div`
    margin: 0 0 1rem;
`;


const Title = styled.h1`
    margin: 0 0 3rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
`;

const Input = styled.input`
    width: 25rem;
    height: 1.75rem;
    font-size: 1.25rem;
`;

const Label = styled.label`
    color: white;
    display: block;
    font-size: 1.5rem;
`;

const Button = styled.button`
    display: block;
    margin: 2rem auto 0;
    padding: 1rem 3rem;
    font-size: 1.25rem;
`;

function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

        fetch("http://localhost:8000/sessions", {
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
        })
        .catch((error) => {
            console.log("Error: ", data);
        });
    }

    return <Container>

        <form>
            <Title>Login</Title>

            <EmailContainer>
                <Label htmlFor="email">Email: </Label>
                <Input id="email" type="email" onChange={handleEmailChange}/>
            </EmailContainer>

            <Label htmlFor="password">Password: </Label>
            <Input id="password" type="password" onChange={handlePasswordChange}/>

            <Button onClick={authenticate} type="button">Entrar</Button>
        </form>
    </Container>
}

export default LoginForm;