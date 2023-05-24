import React from "react";
import styled from "styled-components";

import FlagDetail from "../../assets/FlagDetail.png";

const Container = styled.div`
    margin: 2rem 0 0;
    display: flex;
    justify-content: center;
    position: relative;
`;

const NoMarginTopContainer = styled(Container)`
    margin: 0 0 0;
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

    @media (max-width: 375px){

        width: 90%;
    }
`;

const Image = styled.input`
    width: 6rem;
    position: absolute;
    z-index: 10;
    top: -20px; 
    left: 40px;

@media (max-width: 1360px) {
    left: 30px;
}

@media (max-width: 375px){
    left: 0px;
}
`;

const Input = styled.input`
    width: 4rem;
    height: 4rem;
    position: absolute;
    z-index: 11;
    top: -3px; 
    left: 56px;
    
    background-color: transparent;
    color: white;
    border: none;

    font-size: 2rem;
    text-align: center;

@media (max-width: 1360px) {
    left: 30px;
}

@media (max-width: 375px){
    left: 0px;
}
`;


interface Props{

    value: number;
    onChange: (value: number) => void;
    children: JSX.Element | string;
    marginTop?: boolean;
}

function BonusFlag({value, onChange, children, marginTop = true}: Props){

    if(!marginTop){
        return <NoMarginTopContainer>
            <Image type="image" src={FlagDetail} className="bonus-flag-img"/>
            <Input type="number" value={value} onChange={(e) => onChange(parseInt(e.target.value))}/>
            <Text><p>{children}</p></Text>
        </NoMarginTopContainer>
    }

    return <Container>
        <Image type="image" src={FlagDetail} className="bonus-flag-img"/>
        <Input type="number" value={value} onChange={(e) => onChange(parseInt(e.target.value))}/>
        <Text><p>{children}</p></Text>
    </Container>
}

export default BonusFlag;