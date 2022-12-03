import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: red;
    width: 1000px;
    height: 700px;
`

interface Props{
    next: () => void;
    prev: () => void;
}


function DiscordData({prev, next}: Props){

    return <Container>
        <label htmlFor="name">DiscordID</label>
        <input type="text" id="name"/>

        <label htmlFor="email">NickName</label>
        <input type="email" id="email"/>

        <button onClick={prev}>Voltar</button>
        <button onClick={next}>Cadastrar</button>
    </Container>
}

export default DiscordData;