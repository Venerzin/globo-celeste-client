import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GenericTextField from "../GenericTextField/GenericTextField";

import { usePlayerStore } from "../../store/player";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-area: textfield;
`;

interface ICharacteristics{
    personalityTraits: string,
    ideals: string,
    bonds: string,
    flaws: string,
}

function Characteristics(){

    const { state, actions } = usePlayerStore((store) => store);
    
    const [characteristics, setCharacteristics] = useState<ICharacteristics>({
        personalityTraits: state.personalityTraits,
        ideals: state.ideals,
        bonds: state.bonds,
        flaws: state.flaws
    });

    useEffect(() => {
        actions.updateUser({...state, ...characteristics});
        // eslint-disable-next-line
    }, [characteristics]);

    function handlePersonalityTraitsChange(personalityTraits: string){
        setCharacteristics({...characteristics, personalityTraits})
    }

    function handleIdealsChange(ideals: string){
        setCharacteristics({...characteristics, ideals})
    }

    function handleBondsChange(bonds: string){
        setCharacteristics({...characteristics, bonds})
    }

    function handleFlawsChange(flaws: string){
        setCharacteristics({...characteristics, flaws})
    }

    return <Container>
        <GenericTextField mr={"1rem"} text={characteristics.personalityTraits} handleChange={handlePersonalityTraitsChange}>
            Traço de Personalidade
        </GenericTextField>
        <GenericTextField mr={"1rem"} text={characteristics.ideals} handleChange={handleIdealsChange}>
            Ideais
        </GenericTextField >
        <GenericTextField mr={"1rem"} text={characteristics.bonds} handleChange={handleBondsChange}>
            Vinculos
        </GenericTextField>
        <GenericTextField mr={"1rem"} text={characteristics.flaws} handleChange={handleFlawsChange}>
            Fraquezas
        </GenericTextField>
    </Container>
}

export default Characteristics;