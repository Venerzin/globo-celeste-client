import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { usePlayerStore } from '../../store/player';

const Container = styled.div`
    width: 80%;
    position: relative;
    color: white;
    background-color: #0e071b;
    border: 3px solid #666666;
    margin-bottom: 2rem;
    

    @media (max-width: 375px){
        width: 100%;
    }
`;

const Title = styled.h3`
    color: white;
    text-align: center;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-bottom: 3px solid #666666;
`;

const WrapperTotalPV = styled.div`
    height: 6rem;
    padding: 0.5rem 1.5rem 0.5rem;
`;

const TotalPVContainer = styled.div`
    display: flex;
    height: 20%;

    p{
        width: 45%;
    }

    input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #666666;
        color: white;
        text-align: center;
        font-size: 1rem;
        width: 55%;
    }
`;

const ActualPVContainer = styled.div`
    height: 70%;

    padding-top: 1rem;

    input{
        height: 70%;
        width: 100%;
        color: white;
        font-size: 2rem;
        text-align: center;
        background-color: transparent;
        border: none;
    };
    p{
        height: 30%;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
    }
`;

const WrapperTemporaryPV = styled.div`
    height: 6rem;
    display: flex;
    flex-direction: column;

    input{
        height: 70%;
        width: 100%;
        color: white;
        font-size: 2rem;
        text-align: center;
        background-color: transparent;
        border: none;
    };

    p{
        height: 30%;
        width: 100%;
        text-align: center;
    }
`;

const FlexWrapper = styled.div`
    height: 6rem;
    display: flex;
`;

const WrapperLifeDice = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;

    input{
        height: 70%;
        width: 100%;
        color: white;
        font-size: 2rem;
        text-align: center;
        background-color: transparent;
        border: none;
    };

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    p{
        height: 30%;
        width: 100%;
        text-align: center;
    }
`;

const WrapperSalvaGuardaContraMorte = styled.div`
    width: 50%;
    height: 100%;
    padding-bottom: .65rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    div{
        display: flex;
        margin-bottom: .5rem;
    }
`;

function Life(){

    const { state, actions } = usePlayerStore((store) => store);
    const [life, setLife] = useState({maxLife: 0, currentLife: 0, temporaryLife: 0, lifeDices: "1d8"});

    const handleMaxLifeChange = (element: HTMLInputElement) => {
        setLife({...life, maxLife: parseInt(element.value)});
    }

    const handleCurrentMaxLifeChange = (element: HTMLInputElement) => {
        setLife({...life, currentLife: parseInt(element.value)});
    }

    const handleTemporaryLifeChange = (element: HTMLInputElement) => {
        setLife({...life, temporaryLife: parseInt(element.value)});
    }

    const handleLifeDicesChange = (element: HTMLInputElement) => {
        setLife({...life, lifeDices: element.value});
    }

    useEffect(() => {
        actions.updateUser({...state, ...life});
        // eslint-disable-next-line
    }, [life]);

    return <Container>
        <Title>HP</Title>
        <WrapperTotalPV>
            <TotalPVContainer>
                <p>Pontos de vida máximos</p>
                <input type="number" value={life.maxLife} onChange={(e) => handleMaxLifeChange(e.target)}/>
            </TotalPVContainer>

            <ActualPVContainer>
                <input type="number" value={life.currentLife} onChange={(e) => handleCurrentMaxLifeChange(e.target)}/>
                <p>Pontos de vida atuais</p>
            </ActualPVContainer>
        </WrapperTotalPV>
        
        <WrapperTemporaryPV>
            <input type="number" value={life.temporaryLife} onChange={(e) => handleTemporaryLifeChange(e.target)}/>
            <p>PV Temporário</p>
        </WrapperTemporaryPV>

        <FlexWrapper>
            <WrapperLifeDice>
                <input type="text" value={life.lifeDices} onChange={(e) => handleLifeDicesChange(e.target)}/>
                <p>Dados de Vida</p>
            </WrapperLifeDice>
            <WrapperSalvaGuardaContraMorte>
                <div>
                    <p>Sucessos: </p>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
                <div>
                    <p>Fracassos: </p>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
                Teste contra morte
            </WrapperSalvaGuardaContraMorte>
        </FlexWrapper>
    </Container>
}

export default Life;