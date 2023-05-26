import React, { useState } from "react";
import styled from "styled-components";
import { IClass } from "../../interfaces/IClasses";

const FormWrapper = styled.div`
    width: 50%;
    height: 70%;
    border-radius: 10px;
    padding: 2rem;

    background-color: white;
    position: relative;
`;

const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 4rem;
`;

const InputWrapper = styled.div`
    margin-bottom: 1rem;
    
`;

const Label = styled.label`
    display: block;
    margin-bottom: .5rem;
`;

const Input = styled.input`
    width: 100%;
    height: 1.75rem;
`;

const Button = styled.button`
    height: 3rem;
    width: 8rem;
    position: absolute;
    bottom: 2rem;
    right: 5%;
    background-color: #44d444;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
`;

interface Props{
    addClass: (rpgClass: IClass) => void;
    closeModal: () => void;
}

function CreateClass({ addClass, closeModal }: Props) {

    const token = sessionStorage.getItem("token");
    const [title, setTitle] = useState("");

    const save = () => {

        if(!token){
            return
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/admin/class`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            },
            body: JSON.stringify({name: title}),
        }).then(async (res) => {

            const data: IClass = await res.json();
            
            addClass(data);
            closeModal();
        }).catch((err) => {
            console.log(err);
        })
    }

    return <FormWrapper onClick={(e) => e.stopPropagation()}>
        <Title>Nova ficha</Title>

        <InputWrapper>
            <Label htmlFor="input-nickname">Title:</Label>
            <Input type="text" id="input-nickname" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </InputWrapper>
        

        <Button onClick={save}>Criar</Button>
    </FormWrapper>
}

export default CreateClass;