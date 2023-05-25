import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1000;
`;

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
    show: boolean;
    closeModal: () => void;
}

function CreateFichaModal({show, closeModal}: Props){

    const { id } = useParams();
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");
    const [specie, setSpecie] = useState("");

    const save = () => {
        
        if(!token || !id){
            return
        }

        if(nickname === "" || specie === ""){
            return
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/players`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                userId: id,
                nickname, 
                specie,
            })
        }).then(async (res) => {
            const data = await res.json();
            
            if(data.id){
                return navigate(`/ficha/${data.id}`);
            }
            
            console.log("Usuário não foi criado");
        }).catch((err) => console.log(err));
    }

    if(show){
        return <Container onClick={closeModal}>
            <FormWrapper onClick={(e) => e.stopPropagation()}>
                <Title>Nova ficha</Title>

                <InputWrapper>
                    <Label htmlFor="input-nickname">Nickname:</Label>
                    <Input type="text" id="input-nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required/>
                </InputWrapper>
                
                <InputWrapper>
                    <Label htmlFor="input-specie">Espécie:</Label>
                    <Input type="text" id="input-specie" value={specie} onChange={(e) => setSpecie(e.target.value)} />
                </InputWrapper>

                <Button onClick={save}>Criar</Button>
            </FormWrapper>
        </Container>
    }
    

    return null
}

export default CreateFichaModal;