import React from "react";
import styled from "styled-components";

import FlagDetail from "../../assets/FlagDetail.png";

const Container = styled.div`
margin: 2rem 0 0;
display: flex;
justify-content: center;
position: relative;
`;

const Text = styled.div`
    width: 75%;
    height: 3.5rem;
    background-color: #0e071b;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;

const Image = styled.input`
width: 6rem;
position: absolute;
z-index: 10;
top: -20px; 
left: 20px;

`;

interface Props{

    children: JSX.Element | string;
}

function BonusFlag({children}: Props){

    return <Container>
        <Image type="image" src={FlagDetail}/>
        <Text><p>{children}</p></Text>
    </Container>
}

export default BonusFlag;