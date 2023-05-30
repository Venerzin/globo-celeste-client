import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Banner from "../Banner/Banner";
import BonusFlag from "../BonusFlag/BonusFlag";
import Life from "../Life/Life";
import { usePlayerStore } from "../../store/player";

const Container = styled.div`
    height: 49rem;
    margin: 0 1rem 0;
    grid-area: playerinfo;
    align-self: center;

    @media (max-width: 500px){
        margin: 0 0;
        height: 46rem;
    }
`;

const BannerSection = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 500px){
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "primeiro segundo terceiro";
        justify-items: center;
    }
`;

const LifeSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media (max-width: 500px){
        margin: 2rem 0;
    }
`;

const OtherSection = styled.div`
`;

function LifeContent(){

    const { state, actions } = usePlayerStore((store) => store);
    const [bannerStats, setBannerStats] = useState({ca: 0, initiative: 0, displacement: 0});
    const [others, setOthers] = useState({proficiencyBonus: 0, inspiration: 0, passivePerception: 0});

    const handleCAChange = (element: HTMLInputElement) => {
        setBannerStats({...bannerStats, ca: parseInt(element.value)});
    }

    const handleInitiativeChange = (element: HTMLInputElement) => {
        setBannerStats({...bannerStats, initiative: parseInt(element.value)});
    }

    const handleDisplacementChange = (element: HTMLInputElement) => {
        setBannerStats({...bannerStats, displacement: parseInt(element.value)});
    }

    const handleProficiencyBonusChange = (value: number) => {
        setOthers({...others, proficiencyBonus: value});
    }

    const handleInspirationChange = (value: number) => {
        setOthers({...others, inspiration: value});
    }

    const handlePassivePerceptionChange = (value: number) => {
        setOthers({...others, passivePerception: value});
    }

    useEffect(() => {
        
        actions.updateUser({...state, ...bannerStats});
        actions.updateUser({...state, ...others});
        // eslint-disable-next-line
    }, [bannerStats, others]);

    return <Container>
        <BannerSection>
            <Banner title="CA" posLeft="40%" gridArea={"primeiro"} value={state.ca} handleChange={handleCAChange}/>
            <Banner title="Iniciativa" posLeft="24%" gridArea={"segundo"} className="second" value={state.initiative} handleChange={handleInitiativeChange}/>
            <Banner title="Desloc" posLeft="30%" gridArea={"terceiro"} className="third" value={state.displacement} handleChange={handleDisplacementChange}/>
        </BannerSection>

        <LifeSection>
            <Life />
        </LifeSection>

        <OtherSection>
            <BonusFlag value={others.proficiencyBonus} onChange={handleProficiencyBonusChange} marginTop={false}>Bônus de Proeficiencia</BonusFlag>
            <BonusFlag value={others.inspiration} onChange={handleInspirationChange}>Inspiração</BonusFlag>
            <BonusFlag value={others.passivePerception} onChange={handlePassivePerceptionChange}>Percepção passiva</BonusFlag>
        </OtherSection>
    </Container>
}

export default LifeContent;