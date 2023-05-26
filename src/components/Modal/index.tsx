import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1000;
`;

interface Props{
    show: boolean;
    closeModal: () => void;
    children: React.ReactNode
}

function Modal({show, closeModal, children}: Props){

    if(show){
        return <Container onClick={closeModal}>
            {children}
        </Container>
    }
    

    return null
}

export default Modal;