import React, { ChangeEvent, useEffect, useState } from "react";
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
    onChange(num: number): void;
}

function Pieces({children, pieces, onChange}: Props){

    const [value, setValue] = useState(pieces);

    function handleChange(event: ChangeEvent<HTMLInputElement>){

        setValue(parseInt(event.target.value));
    }

    const handleInputBlur = (e: HTMLInputElement) => {
        if(isNaN(parseInt(e.value)) || parseInt(e.value) < 0){
            setValue(0);
        }
    }

    useEffect(() => {
        onChange(value);

         // eslint-disable-next-line
    }, [value])

    return <Wrapper>
        <Image src={MoneyMold}/>
        <Input type="number" value={value} onChange={(event) => handleChange(event)} onBlur={(e) => handleInputBlur(e.target)}></Input>
        <Subtitle>{children}</Subtitle>
    </Wrapper>
}

export default Pieces;