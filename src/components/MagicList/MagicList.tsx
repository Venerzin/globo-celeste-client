import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 30%;
    padding: .5rem;
    background-color: #140929;
    border: 2px solid #666666;
    margin: 1rem 0 0 0;

    @media (max-width: 500px){
        width: 100%;
        border: none;
    }
`;

const Header = styled.button`
    width: 100%;
    display: flex;
    background-color: inherit;
    border: none;
    cursor: pointer;
`;

const Level = styled.p`
    width: 25%;
    text-align: center;
    color: white;
    font-size: 1.15rem;
    border: 2px solid #666666;
`;

const Title = styled.input`
    font-size: 1.15rem;
    text-transform: uppercase;
    width: 75%;
    text-align: center;
    color: white;
    border: 2px solid #666666;
    border-left: none;
    background-color: inherit;
`;

const UsedFields = styled(Title)`
    width: 70%;
`;

const TotalFields = styled(Title)`
    width: 30%;
`;

const Body = styled.div<BodyProps>`
    width: 100%;
    height: ${({active}: BodyProps) => active ? 'auto' : '0'};
    overflow: ${({active}: BodyProps) => active ? 'auto' : 'hidden'};
`;

const MagicInput = styled.input`
    width: 90%;
    font-size: 1.15rem;
    border: none;
    border-bottom: 1px solid #666666;
    color: white;
    background-color: inherit;

    &:focus{
        outline: none;
        background-color: #272727;
    }
`;

const MagicInputNoReadySelect = styled(MagicInput)`
    width: 100%;
`;

const ReadySelect = styled.input`
    width: 10%;
`;

interface BodyProps{
    active: boolean;
}

interface Props{
    title?: string;
    level: number;
    howMuchLines: number;
    magics: Object;
    width: number;
    readySelect?: boolean;
    onChange: (state: Object) => void;
}

enum LevelEnum {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eigth,
    nine,
}

function MagicList({ title, level, width, magics, readySelect, onChange, howMuchLines = 1}: Props) {

    const [clicked, setClicked] = useState(false);
    
    const bodyRef = useRef<HTMLDivElement>(null);
    const lines = [];
    
    for(let i=0; i < howMuchLines; i++){
        lines.push(i);
    }
    
    function handleToggle() {
        setClicked(!clicked);
    } 
    

    function handleInputOnBlur(){
        if(bodyRef.current){
           let inputs = bodyRef.current.getElementsByClassName("input");
           let inputsValues = {}
           
           for(let i = 0; i <= howMuchLines; i++){
               if(inputs.item(i) !== null){
                   let input = inputs.item(i) as HTMLInputElement;

                   let property = `i-${i}`;
                   
                   inputsValues = {
                    ...inputsValues,
                    [property]: input.value,
                   };
                }
           }

           onChange({[LevelEnum[level]]: inputsValues});
        }

    }
    
    if(width >= 1024){

        if(readySelect){
            return <Container>
                <Header>
                    <Level>{level}</Level>
                    <TotalFields/><UsedFields/>
                </Header>
                <Body active={true} ref={bodyRef}>
                    {
                        //@ts-ignore
                        lines.map((val, index) => <><ReadySelect type={"checkbox"} key={`s-${index}`}/><MagicInput type="text" key={`i-${index}`} defaultValue={magics[`i-${index}`] ? magics[`i-${index}`] : ""} className="input" onBlur={handleInputOnBlur}/></>)
                    }
                </Body>
            </Container>
        }
    
        return <Container>
            <Header>
                <Level>{level}</Level>
                <Title value={title} type="button" />
            </Header>
            <Body active={true} ref={bodyRef}>
                {
                    //@ts-ignore
                    lines.map((val, index) => <MagicInputNoReadySelect type="text" key={`i-${index}`} defaultValue={magics[`i-${index}`] ? magics[`i-${index}`] : ""} className="input" onBlur={handleInputOnBlur}/>)
                }
            </Body>
        </Container>

    }

    if(readySelect){
        return <Container>
            <Header onClick={handleToggle}>
                <Level>{level}</Level>
                <TotalFields/><UsedFields/>
            </Header>
            <Body active={clicked} ref={bodyRef}>
                {
                    //@ts-ignore
                    lines.map((val, index) => <><ReadySelect type={"checkbox"} key={`s-${index}`}/><MagicInput type="text" key={`i-${index}`} className="input" onBlur={handleInputOnBlur}/></>)
                }
                <ReadySelect type={"checkbox"}/>
                <MagicInput type="text" />
            </Body>
        </Container>
    }

    return <Container>
        <Header onClick={handleToggle}>
            <Level>{level}</Level>
            <Title value={title} type="button" />
        </Header>
        <Body active={clicked} ref={bodyRef}>
            {
                //@ts-ignore
                lines.map((val, index) => <MagicInputNoReadySelect key={`i-${index}`} className="input" onBlur={handleInputOnBlur}/>)
            }
        </Body>
    </Container>
};

export default MagicList;