import React from "react";
import styled from "styled-components";

import Banner from "../Banner/Banner";
import BonusFlag from "../BonusFlag/BonusFlag";
import Life from "../Life/Life";

const Container = styled.div`
height: 49rem;
margin: 0 5rem 0;
`;

const BannerSection = styled.div`
    display: flex;
`;
const LifeSection = styled.div``;
const OtherSection = styled.div``;

function PlayerInfos(){

    return <Container>
        <BannerSection>
            <Banner title="CA" posLeft="40%"/>
            <Banner title="Iniciativa" posLeft="24%"/>
            <Banner title="Deslocamento" posLeft="9%"/>
        </BannerSection>

        <LifeSection>
            <Life />
        </LifeSection>

        <OtherSection>
            <BonusFlag>Bônus de Proeficiencia</BonusFlag>
            <BonusFlag>Inspiração</BonusFlag>
            <BonusFlag>Percepção passiva</BonusFlag>
        </OtherSection>
    </Container>
}

export default PlayerInfos;