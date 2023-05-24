import React, { useRef } from 'react';
import './style.css';
import styled from 'styled-components';

const Label = styled.label`
  text-transform: capitalize;
  color: white;
  padding: 0 0 0 .5rem;
`;

interface Props {
    name: string;
    activedSkills: string[];
    onChange(value: string, activated: boolean): void;
}

function Skill({name, activedSkills, onChange}: Props){

    const labelRef = useRef<HTMLLabelElement>(null);

    function handleInputChange(){
        if(labelRef.current !== null){
            let input = labelRef.current.firstElementChild as HTMLInputElement;
            onChange(name, input.checked);
        }

    }

    return <>
        <Label htmlFor={name.toLocaleLowerCase()} ref={labelRef}>
            {activedSkills.includes(name) ? <input type="checkbox" id={name.toLocaleLowerCase()} defaultChecked={true} onChange={handleInputChange}/> : <input type="checkbox" id={name.toLocaleLowerCase()} onChange={handleInputChange}/>}
            _ {name.toLocaleLowerCase()}
        </Label>
    </>
}

export default Skill;