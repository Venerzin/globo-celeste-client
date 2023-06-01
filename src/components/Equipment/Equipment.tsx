import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pieces from '../Pieces/Pieces';
import { IEquipaments } from '../../interfaces/IEquipaments';
import { usePlayerStore } from '../../store/player';

const Container = styled.div`
    background-color: #0e071b;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    position: relative;
    border-radius: 15px;
`;

const Title = styled.h3`
    color: white;
    text-align: center;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 3px solid #666666;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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
}

function Equipment({children, mr="0%"}: Props){

    const { state, actions } = usePlayerStore((store) => store);
    const [equipaments, setEquipaments] = useState<IEquipaments>({
        text: state.equipament,
        pc: state.pc,
        pp: state.pp,
        pe: state.pe,
        po: state.po,
        pl: state.pl,
    });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function handleEquipamentsChange(){

        if(textAreaRef.current){
            setEquipaments({ ...equipaments, text: textAreaRef.current.value});
        }
    }

    function handlePiecesOfCooperChange(num: number){

        setEquipaments({ ...equipaments, pc: num});
    }

    function handlePiecesOfSilverChange(num: number){

        setEquipaments({ ...equipaments, pp: num});
    }

    function handlePiecesOfElectroChange(num: number){

        setEquipaments({ ...equipaments, pe: num});
    }

    function handlePiecesOfGoldChange(num: number){

        setEquipaments({ ...equipaments, po: num});
    }

    function handlePiecesOfPlatinumChange(num: number){

        setEquipaments({ ...equipaments, pl: num});
    }

    useEffect(() => {

        actions.updateUser({...state, ...{
            equipament: equipaments.text,
            pc: equipaments.pc || 0,
            pp: equipaments.pp || 0,
            pe: equipaments.pp || 0,
            po: equipaments.pp || 0,
            pl: equipaments.pl || 0,
        }});

        // eslint-disable-next-line
    }, [equipaments]);

    return <Container style={{ marginBottom: mr}}>
        <Title>{children}</Title>
        <TextArea defaultValue={equipaments.text} ref={textAreaRef} onBlur={handleEquipamentsChange}>
        </TextArea>
        <GoldWrapper>
                <Pieces pieces={equipaments.pc} onChange={handlePiecesOfCooperChange}>
                    Pc
                </Pieces>
                <Pieces pieces={equipaments.pp} onChange={handlePiecesOfSilverChange}>
                    Pp
                </Pieces>
                <Pieces pieces={equipaments.pe} onChange={handlePiecesOfElectroChange}>
                    Pe
                </Pieces>
                <Pieces pieces={equipaments.po} onChange={handlePiecesOfGoldChange}>
                    Po
                </Pieces>
                <Pieces pieces={equipaments.pl} onChange={handlePiecesOfPlatinumChange}>
                    Pl
                </Pieces>
        </GoldWrapper>
    </Container>
}

export default Equipment;