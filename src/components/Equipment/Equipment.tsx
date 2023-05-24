import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pieces from '../Pieces/Pieces';
import { IEquipaments } from '../../interfaces/IEquipaments';

const Container = styled.div`
    background-color: #0e071b;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    position: relative;
`;

const Title = styled.h3`
color: white;
text-align: center;
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;

border: 3px solid #666666;
`;

const TextArea = styled.textarea`
    background-color: inherit;
    width: 100%;
    height: 80%;
    resize: none;
    border: 2px solid #666666;
    color: white;

    padding-top: 5rem;
    padding-left: .5rem;
`;

const GoldWrapper = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    top: 20.5%;

    flex-direction: row;
    justify-content: center;
`;

interface Props {
    children: string;
    mr?: string;
    pc: number;
    pp: number;
    pe: number;
    po: number;
    pl: number;
    text: string;
    onChange(equipaments: IEquipaments): void;
}

function Equipment({text, pc, pp, pe, po, pl, children, onChange, mr="0%"}: Props){

    const [equipaments, setEquipaments] = useState<IEquipaments>({
        text,
        pc,
        pp,
        pe,
        po,
        pl
    });
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function handleEquipamentsOnBlur(){

        if(textAreaRef.current){
            setEquipaments({ ...equipaments, text: textAreaRef.current.value});
        }
    }

    function handlePiecesOfCooperOnBlur(num: number){

        setEquipaments({ ...equipaments, pc: num});
    }

    function handlePiecesOfSilverOnBlur(num: number){

        setEquipaments({ ...equipaments, pp: num});
    }

    function handlePiecesOfElectroOnBlur(num: number){

        setEquipaments({ ...equipaments, pe: num});
    }

    function handlePiecesOfGoldOnBlur(num: number){

        setEquipaments({ ...equipaments, po: num});
    }

    function handlePiecesOfPlatinumOnBlur(num: number){

        setEquipaments({ ...equipaments, pl: num});
    }

    useEffect(() => {
        onChange(equipaments);
        // eslint-disable-next-line
    }, [equipaments]);

    return <Container style={{ marginBottom: mr}}>
        <Title>{children}</Title>
        <TextArea defaultValue={equipaments.text} ref={textAreaRef} onBlur={handleEquipamentsOnBlur}>
        </TextArea>
        <GoldWrapper>
                <Pieces pieces={pc} onBlur={handlePiecesOfCooperOnBlur}>
                    Pc
                </Pieces>
                <Pieces pieces={pp} onBlur={handlePiecesOfSilverOnBlur}>
                    Pp
                </Pieces>
                <Pieces pieces={pe} onBlur={handlePiecesOfElectroOnBlur}>
                    Pe
                </Pieces>
                <Pieces pieces={po} onBlur={handlePiecesOfGoldOnBlur}>
                    Po
                </Pieces>
                <Pieces pieces={pl} onBlur={handlePiecesOfPlatinumOnBlur}>
                    Pl
                </Pieces>
        </GoldWrapper>
    </Container>
}

export default Equipment;