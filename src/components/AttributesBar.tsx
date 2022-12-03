import React from "react";
import styled from "styled-components";
import Attribute from "./Attribute/Attribute";

import AttributeDetail from "../assets/AttributeDetail.png";

const Container = styled.div`
    background-color: #181029;
    width: 10%;
    padding: 2rem 0 2rem 0;
    height: 49rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
`;

const Image = styled.img`
    position: absolute;
    top: ${(props) => props.defaultValue};
`;

function AttributesBar(){
    return <Container>
        <Image src={AttributeDetail} defaultValue="-8%"/>
        <Attribute title="FOR" value={0}/>
        <Attribute title="DES" value={0}/>
        <Attribute title="CON" value={0}/>
        <Attribute title="INT" value={0}/>
        <Attribute title="SAB" value={0}/>
        <Attribute title="CAR" value={0}/>
        <Image src={AttributeDetail} defaultValue="90%"/>
    </Container>
}

export default AttributesBar;