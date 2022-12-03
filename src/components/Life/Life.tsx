import React from 'react';
import styled from 'styled-components';

import LifeImage from '../../assets/Life.png'

const Container = styled.div`
    position: relative
`;

const Title = styled.h3`
    position: absolute;
    color: white;
    top: 10%;
    left: 35%;
`;

const Image = styled.img`
width: 30rem;
`;

function Life(){

    return <Container>
        <Title>HP TEMPORARIO</Title>
        <Image src={LifeImage}/>
    </Container>
}

export default Life;