import React from "react";
import styled from "styled-components";

interface ContainerProps{
    width?: string;
    height?: string;
    onClick?: () => void;
}

const Container = styled.div<ContainerProps>`
    width: ${props => props.width ? props.width : "4rem"};
    height: ${props => props.height ? props.height : "4rem"};
    background-color: gray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${props => props.onClick ? 'pointer' : 'default' };

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
`;

const Icon = styled.p`
    color: inherit;
    font-size: 2rem;
`;

type ProfileProps = {
    name: string;
    width?: string;
    height?: string;
    onClick?: () => void;
}

function Profile({ name, width, height, onClick }: ProfileProps){

    return <Container width={width} height={height} onClick={onClick}>
        <Icon>{name[0]}</Icon>
    </Container>
}

export { Profile }