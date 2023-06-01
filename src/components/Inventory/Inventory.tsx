import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Equipment from '../Equipment/Equipment';
import GenericTextField from '../GenericTextField/GenericTextField';
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

    @media (max-width: 500px){

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

    const { state, actions } = usePlayerStore((store) => store);
    
    const [inventory, setInventory] = useState({
        deathSaves: state.deathsaves,
        attacks: state.attacks,
        featuresAndTraits: state.featureAndTraits,
        others: state.other,
    });

    function handleDeathSavesChange(deathSaves: string){
        setInventory({ ...inventory, deathSaves: deathSaves})
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


    useEffect(() => {
        actions.updateUser({...state, ...{
            deathSaves: inventory.deathSaves,
            attacks: inventory.attacks,
            featureAndTraits: inventory.featuresAndTraits,
            other: inventory.others,
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
            <Equipment>
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