import React from 'react';
import styled from 'styled-components';

import "./style.css";

const Container = styled.div`
    background-color: #0e071b;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const Title = styled.h3`
color: white;
text-align: center;
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;

border: 3px solid #666666;
`;

const TextArea = styled.textarea`
    background-color: inherit;
    width: 100%;
    height: 80%;
    resize: none;
    border: 2px solid #666666;
    color: white;
`;

interface Props {
    children: string;
    mr?: string;
}

function GenericTextField({children, mr="0%"}: Props){

    return <Container style={{ marginBottom: mr}}>
        <Title>{children}</Title>
        <TextArea></TextArea>
    </Container>
}

export default GenericTextField;