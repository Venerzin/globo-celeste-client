import React from "react";
import styled from "styled-components";
import TextField from "../TextField/TextField";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function TextFieldSection(){

    return <Container>
        <TextField title="Traço de personalidade" posLeft="23%"/>
        <TextField title="Ideais" posLeft="23%"/>
        <TextField title="Vinculos" posLeft="23%"/>
        <TextField title="Fraquezas" posLeft="23%"/>
    </Container>
}

export default TextFieldSection;