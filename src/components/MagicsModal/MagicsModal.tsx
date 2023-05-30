import React, { useState } from "react"
import styled from "styled-components"
import MagicList from "../MagicList/MagicList";
import { useParams } from "react-router-dom";
import { IMagics } from "../../interfaces/IMagics";

const Container = styled.div`
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0, 0.5);
    z-index: 1000;
`;

const ModalWrapper = styled.div`

    width: 100%;
    height: 100%;
    background-color: #0e071b;
    overflow: scroll;
   
`;

const ModalHeader = styled.div`
    width: 95%;
    height: 10rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "casterclass  casterclass casterclass"
                         "spellcasting magicscd    magicatkmodifier"
                         "spellcasting magicscd    magicatkmodifier";
    margin: 0 auto;
`;

const ModalBody = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(max-width: 500px){
        width: 100%;
        display: block;
    }
`;

const CloseButton = styled.button`
    background-color: #e63030;
    border: none;
    border-radius: 5px;
    padding: .75rem 2rem;
    margin: 1rem 1rem 1rem 0;

    &:hover{
        background-color: #ff0000
    }
`;

const ButttonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const CasterClass = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: casterclass;
    border: 1px solid #666666;
`;

const SpellCasting = styled.div`
    border: 1px solid #666666;
    grid-area: spellcasting;
    margin: 1rem 0 0;
`;

const MagicsCd = styled.div`
    border: 1px solid #666666;
    grid-area: magicscd;
    margin: 1rem 1rem 0;
`;

const MagicAtkModifier = styled.div`
    border: 1px solid #666666;
    grid-area: magicatkmodifier;
    margin: 1rem 0 0;
`;

const Title = styled.p`
    display: inline-block;
    height: 10%;
    padding: 0 0 0 .5rem;
    color: white;
`;

const Input = styled.input`
    height: 60%;
    width: 100%;
    border: none;
    border-radius: 5px;
`;

interface Props{

    width: number;
    show: boolean;
    dbMagics: IMagics;
    closeModal(): void;
}


function MagicsModal({ width, show, dbMagics, closeModal }: Props){

    const { id } = useParams();
    const [magics, setMagics] = useState({
        zero: dbMagics.zero ? dbMagics.zero : {},
        one:  dbMagics.one ? dbMagics.one : {},
        two:  dbMagics.two ? dbMagics.two : {},
        three:  dbMagics.three ? dbMagics.three : {},
        four:  dbMagics.four ? dbMagics.four : {},
        five:  dbMagics.five ? dbMagics.five : {},
        six:  dbMagics.six ? dbMagics.six : {},
        seven:  dbMagics.seven ? dbMagics.seven : {},
        eigth:  dbMagics.eigth ? dbMagics.eigth : {},
        nine:  dbMagics.nine ? dbMagics.nine : {},
    });

    function handleChange(state: {}){
        //@ts-ignore
        setMagics({...magics, ...state})
    }

    async function save(): Promise<void>{
        
        await fetch(`${process.env.REACT_APP_BASE_URL}/players/magics/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({magics}),
          })
     
    }

    if(show){
        return <Container>


            <ModalWrapper>

            <ButttonWrapper>
                <CloseButton onClick={async () => {
                    save()
                        .then(() => console.log("Magias salvas com sucesso"))
                        .catch(() => console.log("Algo deu errado ao salvar as magias"));
                    closeModal();
                }}>Close</CloseButton>
            </ButttonWrapper>


                <ModalHeader>
                    <CasterClass>
                        <Input type="text"/>
                        <Title>Classe Conjuradora</Title>
                    </CasterClass>

                    <SpellCasting>
                        <Input />
                        <Title>Atributos de Conujuração</Title>
                    </SpellCasting>

                    <MagicsCd>
                        <Input />
                        <Title>CD para evitar suas magias</Title>
                    </MagicsCd>

                    <MagicAtkModifier>
                        <Input />
                        <Title>Modificador de ataque mágico</Title>
                    </MagicAtkModifier>
                </ModalHeader>


                <ModalBody>
                    <MagicList magics={magics.zero} width={width} title="Truques" level={0} howMuchLines={8} readySelect={false} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.one} width={width} title="" level={1} howMuchLines={13} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.two} width={width} title="" level={2} howMuchLines={13} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.three} width={width} title="" level={3} howMuchLines={13} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.four} width={width} title="" level={4} howMuchLines={13} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.five} width={width} title="" level={5} howMuchLines={9} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.six} width={width} title="" level={6} howMuchLines={9} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.seven} width={width} title="" level={7} howMuchLines={9} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.eigth} width={width} title="" level={8} howMuchLines={7} readySelect={true} onChange={handleChange}></MagicList>
                    <MagicList magics={magics.nine} width={width} title="" level={9} howMuchLines={7} readySelect={true} onChange={handleChange}></MagicList>
                </ModalBody>

            </ModalWrapper>
        </Container>
    }

    return null;
    
}

export default MagicsModal;