import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {Profile} from "../Profile";
import { ProfileMenu } from "../ProfileMenu";
import { useUserStore } from "../../store/user";

const Container = styled.div`
    background-color: #0e071b;
    color: white;
    width: 100%;
    height: 6rem;
    padding: 0 5rem 0 5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Logo = styled.a`
    
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.75rem;
    color: inherit;
`;

const NavMenu = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

const NavItem = styled.li`
    margin-right: 2rem;
`;

const NavPerfil = styled(NavItem)`
    margin-left: 8rem;
    margin-right: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    text-transform: uppercase;
`;


type NavBarProps = {
    children?: string;
}

function NavBar({ children }: NavBarProps){

    const [profileMenu, setProfileMenu] = useState(false);
    const user = useUserStore(({state}) => state);

    return <Container>
        <Logo href="#">Globo Celeste</Logo>

        <NavMenu>
            <NavItem>
                <StyledLink to="/admin/classes">
                    Painel Administrativo
                </StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to={`/user/${user.id}`}>
                    Fichas
                </StyledLink>
            </NavItem>

            <NavPerfil>
                <Profile onClick={() => setProfileMenu(prev => !prev)} name={user.firstName}></Profile>
            </NavPerfil>
        </NavMenu>
        

        {profileMenu && <ProfileMenu />}
    </Container>
}

export { NavBar };