import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import './style.css';
import AttributeImage from '../../assets/Attribute.png';

const Container = styled.div`
width: 7.25em;
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

const Modifier = styled.p`
    color: white;
    position: absolute;
    bottom: 15%;
    left: 43%;
`;

interface Props {
    title: string;
    value: number;
    handleChange: (value: number) => void;
}

function Attribute({title, value, handleChange}: Props){

    const [attributeValue, setAttributeValue] = useState(value);
    const [modifier, setModifier] = useState(0);

    function handleInputChangeValue(event: ChangeEvent<HTMLInputElement>){

        if(event.target.value === ""){
            setAttributeValue(0);
            return;
        }

        setAttributeValue(parseInt(event.target.value));
    }

    useEffect(() => {

        let calc = (attributeValue - 10) / 2;
        setModifier(parseInt(calc.toFixed(0)));

        handleChange(attributeValue);
        // eslint-disable-next-line
    }, [attributeValue]);

    return <Container className='attribute-container'>
        <Title>{title}</Title>
        <Value type="number" value={attributeValue} onChange={(e) => {handleInputChangeValue(e)}} min={0}/>
        <Image src={AttributeImage}></Image>
        <Modifier>{modifier >= 0 ? `+${modifier}` : `${modifier}`}</Modifier>
    </Container>
}

export default Attribute;