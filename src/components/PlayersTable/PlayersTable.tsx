import React from 'react';
import styled from 'styled-components';
import { IPlayer } from '../../interfaces/IPlayer';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 80%;
    margin: 1rem auto;
`;

const Table = styled.table`
    background-color: #ccc;
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
    
`;

const TableHead = styled.thead`
`;

const TableHeadCel = styled.th`
    border: 1px solid black;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
`;

const TableCel = styled.td`
    border: 1px solid black;
    text-align: center;
`;

const Button = styled.button`
    width: 5rem;
    height: 3.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-weight: bold;
    color: white;
`;

const DeleteButton = styled(Button)`
    background-color: #e63030;

    &:hover{
        background-color: #ff0000
    }
`;

const OpenButton = styled(Button)`
    background-color: #2ea2f0;

    &:hover{
        background-color: #006eff;
    }
`;

interface Props{
    fichas: IPlayer[];
}

function PlayersTable({fichas}: Props){

    const navigate = useNavigate();

    function handleClickOpenButton(id: string){
        navigate(`/ficha/${id}`);
    }

    return <Container>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadCel>Nome</TableHeadCel>
                    <TableHeadCel>Espécie</TableHeadCel>
                    <TableHeadCel>Nível</TableHeadCel>
                    <TableHeadCel>Ações</TableHeadCel>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    fichas.map((player) => {
                        return <TableRow key={player.id}>
                                <TableCel>{player.nickname}</TableCel>
                                <TableCel>{player.specie}</TableCel>
                                <TableCel>{player.level}</TableCel>
                                <TableCel>
                                    <OpenButton style={{marginRight: '1rem'}} onClick={() => {handleClickOpenButton(player.id)}}>Abrir</OpenButton>
                                    <DeleteButton>Excluir</DeleteButton>
                                </TableCel>
                            </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </Container>
}

export default PlayersTable;