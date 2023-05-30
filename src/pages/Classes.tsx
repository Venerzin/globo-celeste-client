import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IClass } from "../interfaces/IClasses";
import Modal from "../components/Modal";
import CreateClass from "../components/CreateClass";

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const WrapperClasses = styled.div`
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 15px;
    
    @media (max-width: 500px){
        width: 90%;
    }
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0;
`;

const Title = styled.h1`
  font-size: 2.70rem;

  @media (max-width: 500px){
        font-size: 1.5rem;
    }
`;

const Button = styled.button`
  height: 3rem;
  width: 8rem;
  background-color: #2d2142;
  color: white;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 500px){
        width: 6rem;
    }
`;

const Table = styled.table`
    background-color: #ccc;
    border: 1px solid black;
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    
    
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

const DeleteButton = styled.button`
    width: 5rem;
    height: 3.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-weight: bold;

    background-color: #e63030;

    &:hover{
        background-color: #ff0000
    }
`;


function Classes(){

    const token = sessionStorage.getItem('token');
    const [classes, setClasses] = useState<IClass[]>([]);
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const token = sessionStorage.getItem('token'); 

        if(!token){
            return;
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/admin/class`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(async (res) => {

            const data : IClass[] = await res.json();

            setClasses(data);
        });

        function handleResize(){
            setWidth(window.innerWidth);
          }
      
        window.addEventListener('resize', handleResize);

        // eslint-disable-next-line
    },[]);

    const deleteClass = (id: string) => {

        if(!token){
            return;
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/admin/class`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            },
            body: JSON.stringify({id}),
        }).then(async (res) => {

            const data: IClass = await res.json();

            if(data.id !== id){
                return
            }

            const newClasses = classes.filter((rpgClass) => rpgClass.id !== id);

            setClasses(newClasses);
        }).catch((err) => console.log("Algo deu errado: ", err));
    }

    const closeModal = () => {
        setShow(false);
    }

    const handleAddClass = (rpgClass: IClass) => {

        setClasses([...classes, rpgClass]);
    }

    if(width <= 500){

        return <Container>
            <WrapperClasses>
                <Header>
                    <Title>Classes</Title>

                    <Button onClick={() => setShow(true)}>Adicionar</Button>
                </Header>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCel>Nome</TableHeadCel>
                            <TableHeadCel>Ações</TableHeadCel>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            classes.map((rpgClass) => {
                                return <TableRow key={rpgClass.id}>
                                        <TableCel>{rpgClass.name}</TableCel>
                                        <TableCel>
                                            <DeleteButton onClick={(e) => deleteClass(rpgClass.id)}>Excluir</DeleteButton>
                                        </TableCel>
                                    </TableRow>
                            })
                        }
                    </TableBody>
                </Table>

                <Modal show={show} closeModal={closeModal}>
                    <CreateClass closeModal={closeModal} addClass={handleAddClass}/>
                </Modal>

            </WrapperClasses>
        </Container>
    }

    return <Container>
        <WrapperClasses>
            <Header>
                <Title>Classes</Title>

                <Button onClick={() => setShow(true)}>Adicionar</Button>
            </Header>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCel>ID</TableHeadCel>
                        <TableHeadCel>Nome</TableHeadCel>
                        <TableHeadCel>Ações</TableHeadCel>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        classes.map((rpgClass) => {
                            return <TableRow key={rpgClass.id}>
                                    <TableCel>{rpgClass.id}</TableCel>
                                    <TableCel>{rpgClass.name}</TableCel>
                                    <TableCel>
                                        <DeleteButton onClick={(e) => deleteClass(rpgClass.id)}>Excluir</DeleteButton>
                                    </TableCel>
                                </TableRow>
                        })
                    }
                </TableBody>
            </Table>

            <Modal show={show} closeModal={closeModal}>
                <CreateClass closeModal={closeModal} addClass={handleAddClass}/>
            </Modal>

        </WrapperClasses>
    </Container>
}

export default Classes;