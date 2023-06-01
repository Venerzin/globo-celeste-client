import React from "react";
import styled from "styled-components";

import BannerImage from '../../assets/Banner.png';

const Container = styled.div`
position: relative;
grid-area: ${(props) => props.defaultValue};
`;

const Image = styled.img`
    width: 10rem;

    @media (max-width: 500px){
        width: 8rem;
    }
`;

const Title = styled.h3`
    position: absolute;
    color: white;
    top: 10%;
    left: ${(props) => props.defaultValue};

    @media (max-width: 500px){
        left: ${(props) => {
            if(props.className === 'second'){
                return '17%';
            }

            return props.defaultValue
        }};

        font-size: ${(props) => {
            if(props.className === 'third'){
                return '.95rem';
            }

            return
        }};
    }
`;

const Input = styled.input`
    width: 10rem;
    height: 70%;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    text-align: center;
    position: absolute;
    top: 15%;
    left: 0;

    @media (max-width: 500px){
        width: 8rem;
    }
`;

interface Props {
    title: string;
    value: number;
    posLeft: string;
    gridArea: string;
    className?: string;

    handleChange: (element: HTMLInputElement) => void;
}

function Banner({title, value, posLeft, gridArea, className, handleChange}: Props){

    const handleEmptyValue = (e: HTMLInputElement) => {
        if(isNaN(parseInt(e.value))){
            e.value = '0';
            handleChange(e);
        }
    }


    if(className !== undefined){
        return <Container defaultValue={gridArea}>
            <Title defaultValue={posLeft} className={className}>{title}</Title>
            <Image src={BannerImage}></Image>
            <Input type="number" value={value} onChange={(e) => {handleChange(e.target)}} onBlur={(e) => handleEmptyValue(e.target)}></Input>
        </Container>
    }

    return <Container defaultValue={gridArea}>
        <Title defaultValue={posLeft}>{title}</Title>
        <Image src={BannerImage}></Image>
        <Input type="number"  value={value} onChange={(e) => {handleChange(e.target)}} onBlur={(e) => handleEmptyValue(e.target)}></Input>
    </Container>
}

export default Banner;