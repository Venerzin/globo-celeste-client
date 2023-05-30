import React, { useEffect, useState } from "react";
import styled from "styled-components"

import DragonImage from "../../assets/DragonDetail.png";
import { IPlayer } from "../../interfaces/IPlayer";
import { IClass } from "../../interfaces/IClasses";

import { usePlayerStore } from "../../store/player";

const Container = styled.div`
    height: 8rem;
    display: flex;
    background-color: #0e071b;
    border: 5px solid #666666;
    border-radius: 10px;
    margin-top: 2rem;
    position: relative;

    @media (max-width: 500px){
        height: 10rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Image = styled.img`
    position: absolute;
    top: -50%;
    left: -5%;
    z-index: -1;

    @media (max-width:375px){

        top: -40%;
    }
`;

const NicknameWrapper = styled.section`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px){
        height: 30%;
    }
`;

const InfoWrapper = styled.section`
    width: 70%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(6, 1fr);

    grid-template-areas: "pclass pclass race race fragments fragments"
                         "plevel plevel exp  exp  totalexp  totalexp";

    @media (max-width: 500px){
        width: 90%;

        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(4, 1fr);

        grid-template-areas: "pclass    pclass    race      race"
                             "fragments fragments plevel    plevel "
                             "exp       exp       totalexp  totalexp";

        grid-row-gap: 10px;
    }
`;

const ClassWrapper = styled.div`
    grid-area: pclass;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Level = styled.div`
    grid-area: plevel;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TotalExpWrapper = styled.div`
    grid-area: totalexp;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpecieWrapper = styled.div`
    grid-area: race;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ExpToUpWrapper = styled.div`
    grid-area: exp;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nickname = styled.h1`
    color: white;
`;

const FragmentsWrapper = styled.div`
    grid-area: fragments;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    color: white;
`;

interface Props{
    classes: IClass[];
}

function Header(props: Props){

    const {state, actions} = usePlayerStore((store) => store);
    const [currentClass, setCurrentClass] = useState(state.rpgClassId);

    const listOptions = props.classes.map((value) => <option value={value.id} key={value.id}>{value.name}</option>);

    const handleClassChange = (id: string) =>{
        actions.updateUser({...state, rpgClassId: id});
    }

    return <Container>

        <Image src={DragonImage}/>

        <NicknameWrapper>
            <Nickname>{state.nickname}</Nickname>
        </NicknameWrapper>

        <InfoWrapper>
            <ClassWrapper>
                <select defaultValue={""} value={currentClass ? currentClass : ""} onChange={(e) => {handleClassChange(e.target.value)}}>
                   <option value=""></option>
                   {listOptions}
                </select>
            </ClassWrapper>

            <Level>
                <Text>Nível: {state.level}</Text>
            </Level>

            <TotalExpWrapper>
                <Text>Cristais Totais: {state.totalCrystals}</Text>
            </TotalExpWrapper>

            <SpecieWrapper>
                <Text>{state.specie}</Text>
            </SpecieWrapper>

            <ExpToUpWrapper>
                <Text>Cristais para Up: {state.crystalsToUp}</Text>
            </ExpToUpWrapper>

            <FragmentsWrapper>
                <Text>Fragmentos: {state.fragments}</Text>
            </FragmentsWrapper>
        </InfoWrapper>
    </Container>
}

export default Header;