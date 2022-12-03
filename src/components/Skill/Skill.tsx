import React from 'react';
import './style.css';
import styled from 'styled-components';

interface Props {
    name: string;
}

const Label = styled.label`
  text-transform: capitalize;
  color: white;
  padding: 0 0 0 .5rem;
`;

function Skill({name}: Props){
    return <>
        <Label htmlFor={name.toLocaleLowerCase()}><input type="checkbox" id={name.toLocaleLowerCase()}/> _ {name.toLocaleLowerCase()}</Label>
    </>
}

export default Skill;