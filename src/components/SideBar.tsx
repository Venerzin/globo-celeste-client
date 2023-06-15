import React from "react";
import styled from "styled-components";
import AttributesBar from "./AttributesBar/AttributesBar";
import SkillsBar from "./SkillsBar";

const Container = styled.div`
    
    grid-area: sidebar;
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "attributes skills";
`;

function SideBar(){

    return <Container>
            <AttributesBar />
            <SkillsBar />
        </Container>
}

export default SideBar;