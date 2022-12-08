import React from "react";
import styled from "styled-components";
import GenericTextField from "../GenericTextField/GenericTextField";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
`;

function TextFieldSection(){

    return <Container>
        <GenericTextField mr={"1rem"}>
            Traço de Personalidade
        </GenericTextField>
        <GenericTextField mr={"1rem"}>
            Ideais
        </GenericTextField >
        <GenericTextField mr={"1rem"}>
            Vinculos
        </GenericTextField>
        <GenericTextField mr={"1rem"}>
            Fraquezas
        </GenericTextField>
    </Container>
}

export default TextFieldSection;