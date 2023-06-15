import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPersonOutline, MdOutlineSettings, MdOutput } from "react-icons/md";

import { Profile } from "../Profile";
import { useUserStore } from "../../store/user";



const Container = styled.div`
    position: absolute;
    top: 7rem;
    right: 5rem;
    background-color: white;
    width: 18rem;
    border-radius: 5px;
    border: 1px solid black;
    z-index: 10;


    padding: .5rem;
`;

const Triangulo = styled.div`
    position: absolute;
    margin-right: 50px;
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 25px solid white;
    top: -25px;
    right: -35px;
`;

const ProfileName = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    padding: 0 0 .5rem 0;
`;

const Text = styled.p`
    display: inline-block;
    margin-left: 1rem;
    color: black;
    font-size: 1.25rem;

    
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    padding: .75rem 0 0;
`;

const ProfileLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: .25rem 0 .5rem;
    color: black;
    text-decoration: none;

    svg{
        font-size: 1.5rem;
    }
`;

function ProfileMenu(){

    const user = useUserStore(({state}) => state);

    return <Container>

        <Triangulo />

        <ProfileName>
            <Profile name={user.firstName} width="3rem" height="3rem"></Profile>
            <Text>{user.firstName}</Text>
        </ProfileName>

        <Options>
            <ProfileLink to=""><MdPersonOutline /> Perfil</ProfileLink>
            <ProfileLink to=""><MdOutlineSettings /> Configurações</ProfileLink>
            <ProfileLink to=""><MdOutput /> Sair</ProfileLink>
        </Options>
        
    </Container>
}

export { ProfileMenu };