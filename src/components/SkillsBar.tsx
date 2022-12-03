import React from "react";
import styled from "styled-components";
import Skill from "./Skill/Skill";

const Container = styled.div`
    width: 15%;
    margin: 0 0 0 .25rem;
    height: 49rem;
`;

const TopTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 320px solid transparent;
    border-right: 320px solid transparent;
    border-bottom: 160px solid lightblue;
`;

const SkillsWrapper = styled.div`
    background-color: #0e071b;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 0 0;
`;

const Title = styled.h2`
    color: #353d64;
    text-align: center;
    margin-bottom: 2rem;
`;

const pericias = ['Acrobacia', 'Adestrar Animais', 'Arcanismo', 'Atletismo', 'Enganação', 'História', 'Intuição',
 'Intimidação', 'Investigação', 'Medicina', 'Natureza', 'Percepção', 'Atuação', 'Persuasão', 'Religião', 
 'Prestidigitação', 'Furtividade', 'Sobrevivência'];

function SkillsBar(){

    return <Container>
        <SkillsWrapper>
            <Title>Perícias</Title>

            {
                pericias.map((pericia) => <><Skill name={pericia} /> <br /></>)
            }
        </SkillsWrapper>
    </Container>
}

export default SkillsBar;