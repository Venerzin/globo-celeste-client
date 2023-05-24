import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import MoneyMold from "../../assets/MoneyMolde.png";

const Input = styled.input`
    background-color: transparent;
    position: absolute;
    left: 0;
    width: 100%;
    height: 80%;
    text-align: center;
    color: white;
    font-size: 1.25rem;
    border: none;
`;

const Image = styled.img`
    width: 100%;
`;

const Wrapper = styled.div`
    width: 3.75rem;
    position: relative;
`;

const Subtitle = styled.p`
    position: absolute;
    bottom: 0;
    left: 35%;
    color: white;
`;

interface Props{
    children: string;
    pieces: number;
    onBlur(num: number): void;
}

function Pieces({children, pieces, onBlur}: Props){

    const [value, setValue] = useState(pieces);

    function handleChange(event: ChangeEvent<HTMLInputElement>){

        setValue(parseInt(event.target.value));
    }

    return <Wrapper>
        <Image src={MoneyMold}/>
        <Input type="number" defaultValue={value} onChange={(event) => {handleChange(event)}} onBlur={() => onBlur(value)}></Input>
        <Subtitle>{children}</Subtitle>
    </Wrapper>
}

export default Pieces;