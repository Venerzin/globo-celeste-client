import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Equipment from '../Equipment/Equipment';
import GenericTextField from '../GenericTextField/GenericTextField';
import { IPlayer } from '../../interfaces/IPlayer';
import { IEquipaments } from '../../interfaces/IEquipaments';
import { useParams } from 'react-router-dom';
import { usePlayerStore } from '../../store/player';

const Container = styled.div`
    width: 90%;
    height: 700px;
    margin: 2rem auto 2rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(8, 1fr);

    grid-template-areas: "salva salva salva ataques ataques ataques caracteristicas caracteristicas"
                         "equipa equipa equipa equipa outros outros caracteristicas caracteristicas";

    column-gap: 30px;
    row-gap: 30px;

    @media (max-width: 375px){

        width: 100%;
        height: 80rem;
        margin: 0 0 0;

        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: 1fr;

        grid-template-areas: "equipa" 
                             "ataques"
                             "salva"
                             "caracteristicas"
                             "outros";

        column-gap: 0;
        row-gap: 10px;
    }
`;

const SalvaGuardasWrapper = styled.div`
    grid-area: salva;
`;

const AtaquesWrapper = styled.div`
    grid-area: ataques;
`;

const CaracteristicasWrapper = styled.div`
    grid-area: caracteristicas;
`;

const EquipamentosWrapper = styled.div`
    grid-area: equipa;
`;

const IdiomasOutrosWrapper = styled.div`
    grid-area: outros;
`;

function Inventory(){

    const { id } = useParams();
    const { state, actions } = usePlayerStore((store) => store);
    
    const [inventory, setInventory] = useState({
        deathSaves: state.deathsaves,
        attacks: state.attacks,
        featuresAndTraits: state.featureAndTraits,
        others: state.other,
        equipaments: {
            text: state.equipament,
            pc: state.pc,
            pp: state.pp,
            pe: state.pp,
            po: state.pp,
            pl: state.pl,
        }
    });

    function handleDeathSavesChange(deathSaves: string){
        setInventory({ ...inventory, deathSaves})
    }

    function handleAttacksChange(attacks: string){
        setInventory({ ...inventory, attacks})
    }

    function handleFeaturesAndTraitsChange(featuresAndTraits: string){
        setInventory({ ...inventory, featuresAndTraits})
    }

    function handleOthersChange(others: string){
        setInventory({ ...inventory, others})
    }

    function handleEquipamentsChange(equipaments: IEquipaments){
        setInventory({...inventory, equipaments})
    }


    useEffect(() => {
        actions.updateUser({...state, ...{
            deathSaves: inventory.deathSaves,
            attacks: inventory.attacks,
            featureAndTraits: inventory.featuresAndTraits,
            other: inventory.others,
            equipament: inventory.equipaments.text,
            pc: inventory.equipaments.pc,
            pp: inventory.equipaments.pp,
            pe: inventory.equipaments.pp,
            po: inventory.equipaments.pp,
            pl: inventory.equipaments.pl,
        }});

        // eslint-disable-next-line
    }, [inventory]);


    return <Container>
        <SalvaGuardasWrapper>
            <GenericTextField text={state.deathsaves} handleChange={handleDeathSavesChange}>
                Salva Guardas
            </GenericTextField>
        </SalvaGuardasWrapper>
        <AtaquesWrapper>
            <GenericTextField text={state.attacks} handleChange={handleAttacksChange}>
                Ataques
            </GenericTextField>
        </AtaquesWrapper>
        <CaracteristicasWrapper>
            <GenericTextField text={state.featureAndTraits} handleChange={handleFeaturesAndTraitsChange}>
                Características e traços
            </GenericTextField>
        </CaracteristicasWrapper>
        <EquipamentosWrapper>
            <Equipment pc={state.pc} pp={state.pp} pe={state.pe} po={state.po} pl={state.pl} text={state.equipament} onChange={handleEquipamentsChange}>
                Equipamentos
            </Equipment>
        </EquipamentosWrapper>
        <IdiomasOutrosWrapper>
            <GenericTextField text={state.other} handleChange={handleOthersChange}>
                Idiomas e outras putarias
            </GenericTextField>
        </IdiomasOutrosWrapper>
    </Container>
}

export default Inventory;