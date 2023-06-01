import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import "./style.css";

const Container = styled.div`
    background-color: #0e071b;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 15px;

    @media (max-width: 500px){
        height: 14rem; 
    }
`;

const Title = styled.h3`
    color: white;
    text-align: center;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 3px solid #666666;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const TextArea = styled.textarea`
    background-color: inherit;
    width: 100%;
    height: 80%;
    resize: none;
    color: white;
    padding: .5rem 0 0 .5rem;

    border: 2px solid #666666;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

interface Props {
    children: string;
    mr?: string;
    text: string;
    handleChange(value: string): void;
}

function GenericTextField({text, children, mr="0%", handleChange}: Props){

    const [value, setValue] = useState(text);
    const textRef = useRef<HTMLTextAreaElement>(null);

    function handleTextAreaBlur(){
        
        if(textRef.current !== null){
            if(textRef.current.value !== value){
                setValue(textRef.current.value);
            }
        }
    }

    useEffect(() => {

        handleChange(value);
        // eslint-disable-next-line
    }, [value]);

    return <Container style={{ marginBottom: mr}}>
        <Title>{children}</Title>
        <TextArea defaultValue={value} onChange={() => {handleTextAreaBlur()}} ref={textRef}></TextArea>
    </Container>
}

export default GenericTextField;