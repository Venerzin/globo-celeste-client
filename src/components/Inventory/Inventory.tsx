import React from 'react';
import styled from 'styled-components';
import GenericTextField from '../GenericTextField/GenericTextField';

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
`;

const SalvaGuardasWrapper = styled.div`
    grid-area: salva;
    background-color: red;
`;

const AtaquesWrapper = styled.div`
    grid-area: ataques;
    background-color: blue;
`;

const CaracteristicasWrapper = styled.div`
    grid-area: caracteristicas;
    background-color: yellow;
`;

const EquipamentosWrapper = styled.div`
    grid-area: equipa;
    background-color: green;
`;

const IdiomasOutrosWrapper = styled.div`
    grid-area: outros;
    background-color: purple;
`;

function Inventory(){

    return <Container>
        <SalvaGuardasWrapper>
            <GenericTextField>
                Salva Guardas
            </GenericTextField>
        </SalvaGuardasWrapper>
        <AtaquesWrapper>
            <GenericTextField>
                Ataques
            </GenericTextField>
        </AtaquesWrapper>
        <CaracteristicasWrapper>
            <GenericTextField>
                Características e traços
            </GenericTextField>
        </CaracteristicasWrapper>
        <EquipamentosWrapper>
            <GenericTextField>
                Equipamentos
            </GenericTextField>
        </EquipamentosWrapper>
        <IdiomasOutrosWrapper>
            <GenericTextField>
                Idiomas e outras putarias
            </GenericTextField>
        </IdiomasOutrosWrapper>
    </Container>
}

export default Inventory;