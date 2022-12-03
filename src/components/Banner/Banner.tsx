import React from "react";
import styled from "styled-components";

import BannerImage from '../../assets/Banner.png';

const Container = styled.div`
position: relative;
`;

const Image = styled.img`
    width: 10rem;
`;

const Title = styled.h3`
    position: absolute;
    color: white;
    top: 10%;
    left: ${(props) => props.defaultValue};
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
`;

interface Props {
    title: string;
    posLeft: string;
}

function Banner({title, posLeft}: Props){

    return <Container>
        <Title defaultValue={posLeft}>{title}</Title>
        <Image src={BannerImage}></Image>
        <Input type="number" defaultValue={0}></Input>
    </Container>
}

export default Banner;