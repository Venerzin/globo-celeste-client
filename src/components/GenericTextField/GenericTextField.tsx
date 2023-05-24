import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import "./style.css";

const Container = styled.div`
    background-color: #0e071b;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    @media (max-width: 375px){
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
`;

const TextArea = styled.textarea`
    background-color: inherit;
    width: 100%;
    height: 80%;
    resize: none;
    border: 2px solid #666666;
    color: white;
    padding: .5rem 0 0 .5rem;
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