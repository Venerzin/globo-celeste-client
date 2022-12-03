import React from "react"
import styled from "styled-components"

import TextFieldImage from '../../assets/TextField.png';

const Container = styled.div`
position: relative;
width: 25rem;
height: 13rem;
`;

const Title = styled.h3`
color: white;
position: absolute;
top: 10%;
left: ${(props) => props.defaultValue};
`;

const Image = styled.img`
width: 100%;
height: 100%
`;

const TextArea = styled.textarea`
    resize: none;
    width: 90%;
    height: 66%;
    background-color: transparent;
    color: white;
    position: absolute;
    left: 5%;
    top: 33%;
    border: none;
    font: 24px;
`;

interface Props {
    title: string;
    posLeft: string;
}

function TextField({title, posLeft}: Props){

    return <Container>
        <Title defaultValue={posLeft}>{title}</Title>
        <Image src={TextFieldImage}/>
        <TextArea />
    </Container>
}

export default TextField;