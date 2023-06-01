import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Attribute from "../Attribute/Attribute";

import "./style.css";
import AttributeDetail from "../../assets/AttributeDetail.png";

import { usePlayerStore } from "../../store/player";

const Container = styled.div`
    background-color: #181029;
    width: 100%;
    padding: 2rem 0 2rem 0;
    height: 49rem;
    grid-area: attributes;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    @media (max-width: 500px){
        width: 90%;
    }
`;

const Image = styled.img`
    position: absolute;
    top: ${(props) => props.defaultValue};
    right: 13%;

    @media(max-width: 500px){
        right: 7%;
    }
`;

interface Attributes{
    strength: number;
    dexterity: number;
    constitution: number;
    inteligence: number;
    wisdom: number;
    charisma: number;
}

function AttributesBar(){

    const {state, actions} = usePlayerStore((store) => store);

    const [attributes, setAttributes] = useState<Attributes>({
        strength: state.strength,
        dexterity: state.dexterity,
        constitution: state.constitution,
        inteligence: state.inteligence,
        wisdom: state.wisdom,
        charisma: state.charisma
    });

    function handleStrenthChange(strength: number){
        setAttributes({...attributes, strength: strength || 0})
    }

    function handleDexterityChange(dexterity: number){
        setAttributes({...attributes, dexterity: dexterity || 0})
    }

    function handleConstitutionChange(constitution: number){
        setAttributes({...attributes, constitution: constitution || 0})
    }

    function handleInteligenceChange(inteligence: number){
        setAttributes({...attributes, inteligence: inteligence || 0})
    }

    function handleWisdomChange(wisdom: number){
        setAttributes({...attributes, wisdom: wisdom || 0})
    }

    function handleCharismaChange(charisma: number){
        setAttributes({...attributes, charisma: charisma || 0})
    }

    useEffect(() => {
        actions.updateUser({...state, ...attributes});

        // eslint-disable-next-line
    }, [attributes])

    return <Container>
        <Image src={AttributeDetail} defaultValue="-8%"/>
        <Attribute title="FOR" value={state.strength} handleChange={handleStrenthChange}/>
        <Attribute title="DES" value={state.dexterity} handleChange={handleDexterityChange}/>
        <Attribute title="CON" value={state.constitution} handleChange={handleConstitutionChange}/>
        <Attribute title="INT" value={state.inteligence} handleChange={handleInteligenceChange}/>
        <Attribute title="SAB" value={state.wisdom} handleChange={handleWisdomChange}/>
        <Attribute title="CAR" value={state.charisma} handleChange={handleCharismaChange}/>
        <Image src={AttributeDetail} defaultValue="90%" />
    </Container>
}

export default AttributesBar;