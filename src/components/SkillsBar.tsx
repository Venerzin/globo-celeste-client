import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skill from "./Skill/Skill";
import { useParams } from "react-router-dom";
import { usePlayerStore } from "../store/player";

const Container = styled.div`
    width: 100%;
    margin: 0 0 0 .25rem;
    height: 49rem;
    grid-area: skills;
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

    const { id } = useParams();
    const { state, actions } = usePlayerStore((store) => store);
    const [activedSkills, setActivedSkills] = useState<string[]>(state.skills.split("-"));

    function handleChangeActivatedSkill(skill: string, activated: boolean){
        if(activated){
            setActivedSkills((prevState) => {
                if(prevState.includes(skill)){
                    return prevState
                }
    
                return [...prevState, skill]
            });

            return
        }

        setActivedSkills((prevState) => {
            const state = prevState.filter((item) => item !== skill);

            return state;
        });
    }

    useEffect(() => {
        actions.updateUser({...state, skills: activedSkills.join('-')});
        // eslint-disable-next-line
    }, [activedSkills]);

    return <Container>
        <SkillsWrapper>
            <Title>Perícias</Title>

            {
                pericias.map((pericia, index) => <><Skill key={index} name={pericia} activedSkills={activedSkills} onChange={handleChangeActivatedSkill} /> <br /></>)
            }
        </SkillsWrapper>
    </Container>
}

export default SkillsBar;