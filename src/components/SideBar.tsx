import React from "react";
import styled from "styled-components";
import AttributesBar from "./AttributesBar";
import PlayerInfos from "./PlayerInfos/PlayerInfos";
import SkillsBar from "./SkillsBar";
import TextFieldSection from "./TextFieldSection/TextFieldSection";

const Container = styled.div`
    margin: 2rem 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

function SideBar(){

    return <Container>
            <AttributesBar />
            <SkillsBar />
            
            <PlayerInfos />

            <TextFieldSection />
        </Container>
}

export default SideBar;