import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #77777792;
    width: 1000px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
`

const FormWrapper = styled.div`
`;

const Label = styled.label`
    font-size: 2rem;
    font-weight: bold;
    color: white;
    display: inline-block;
`;

const Input = styled.input`
    width: 450px;
    background-color: #0e071b;
    height: 3.5rem;
    display: block;
    color: white;

    border: 3px solid #4e4e4e;
    border-radius: 5px;
`;

const Button = styled.button`
    display: block;
    margin: 2rem auto 0;
    width: 10rem;
    height: 5rem;

    border-radius: 5px;
    border: none;
`;

interface Props {
    next: () => void
}

function PersonalData({next}: Props){

    return <Container>
        <FormWrapper>
            <Label htmlFor="name" style={{marginTop: '0'}}>Nome</Label>
            <Input type="text" id="name"/>

            <Label htmlFor="email" style={{marginTop: '2rem'}}>Email</Label>
            <Input type="email" id="email"/>

            <Label htmlFor="password" style={{marginTop: '2rem'}}>Senha</Label>
            <Input type="password" id="password"/>

            <Button onClick={next}>Próximo</Button>
        </FormWrapper>
    </Container>
}

export default PersonalData;