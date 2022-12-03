import React from "react";
import styled from "styled-components"

import DragonImage from "../../assets/DragonDetail.png";

const Container = styled.div`
    height: 8rem;
    display: flex;
    background-color: #0e071b;
    border: 5px solid #666666;
    border-radius: 10px;
    margin-top: 2rem;
    position: relative;
`;

const Image = styled.img`
    position: absolute;
    top: -50%;
    left: -5%;
    z-index: -1;
`;

const NicknameWrapper = styled.section`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoWrapper = styled.section`
    width: 70%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(6, 1fr);

    grid-template-areas: "pclass pclass palignment palignment username username"
                         "race  race    exp        exp        exp      exp";
`;

const ClassWrapper = styled.div`
    grid-area: pclass;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AlignmentWrapper = styled.div`
    grid-area: palignment;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UsernameWrapper = styled.div`
    grid-area: username;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RaceWrapper = styled.div`
    grid-area: race;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ExpWrapper = styled.div`
    grid-area: exp;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nickname = styled.h1`
    color: white;
`;

const Text = styled.p`
    color: white;
`;


function Header(){

    return <Container>

        <Image src={DragonImage}/>

        <NicknameWrapper>
            <Nickname>Nome do Jogador</Nickname>
        </NicknameWrapper>

        <InfoWrapper>
            <ClassWrapper>
                <Text>Classe</Text>
            </ClassWrapper>

            <AlignmentWrapper>
                <Text>Alinhamento</Text>
            </AlignmentWrapper>

            <UsernameWrapper>
                <Text>Nome do Jogador</Text>
            </UsernameWrapper>

            <RaceWrapper>
                <Text>Raça</Text>
            </RaceWrapper>

            <ExpWrapper>
                <Text>Cristais do tempo</Text>
            </ExpWrapper>
        </InfoWrapper>
    </Container>
}

export default Header;