import React from 'react';
import './style.css';
import styled from 'styled-components';

import AttributeImage from '../../assets/Attribute.png';

const Container = styled.div`
width: 70%;
margin: 0 auto 0;
position: relative;
`;

const Image = styled.img`
    width: 100%;
`;

const Title = styled.h3`
color: white;
position: absolute;
top: 15%;
left: 40%;
font-size: .85rem;
`;

const Value = styled.input`
position: absolute;
top: 15%;
left: 18%;
width: 70%;
height: 70%;
text-align: center;
font-size: 2rem;
background-color: transparent;
color: white;
border: none;

-webkit-appearance: none;
`;

interface Props {
    title: string;
    value: number;
}

function Attribute({title, value}: Props){

    return <Container>
        <Title>{title}</Title>
        <Value type="number" defaultValue={value}/>
        <Image src={AttributeImage} alt="testando" />
    </Container>
}

export default Attribute;