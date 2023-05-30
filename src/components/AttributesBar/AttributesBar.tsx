import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Attribute from "../Attribute/Attribute";

import AttributeDetail from "../../assets/AttributeDetail.png";
import "./style.css";
import { IPlayer } from "../../interfaces/IPlayer";
import { useParams } from "react-router-dom";
import { usePlayerStore } from "../../store/player";

const Container = styled.div`
    background-color: #181029;
    width: 100%;
    padding: 2rem 0 2rem 0;
    height: 49rem;
    grid-area: attributes;

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
    right: 10%;
    
    @media(max-width: 1360px){
        right: 1%;
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

    const { id } = useParams();

    function handleStrenthChange(strength: number){
        setAttributes({...attributes, strength})
    }

    function handleDexterityChange(dexterity: number){
        setAttributes({...attributes, dexterity})
    }

    function handleConstitutionChange(constitution: number){
        setAttributes({...attributes, constitution})
    }

    function handleInteligenceChange(inteligence: number){
        setAttributes({...attributes, inteligence})
    }

    function handleWisdomChange(wisdom: number){
        setAttributes({...attributes, wisdom})
    }

    function handleCharismaChange(charisma: number){
        setAttributes({...attributes, charisma})
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