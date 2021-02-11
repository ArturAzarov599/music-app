import { useState } from "react";
import styled from "styled-components";

const MusicTypesTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    font-style: oblique;
    margin: 10px 0;
`

const MusicTypesList = styled.ul`
    display: flex;
    justify-content: center;
    & li {
        margin-left: 15px;
        padding: 5px 10px;
        cursor: pointer;
    }
`

const MusicTypeItem = styled.li`
    border-bottom: ${props => props.active};
`

const MusicTypeDescription = styled.div`
    width: 100%;
    display: flex;
    height: 400px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    margin: 10px 0;
`

const MusicTypes = () => {

    const [state, setState] = useState(0);

    const array = ["Rock", "Pop", 'Drama', "CryEngine", "Storm"];

    return (
        <>
            <MusicTypesTitle>Music types</MusicTypesTitle>
            <MusicTypesList>
                {
                    array.map((item, index) =>
                        <MusicTypeItem
                            active={state === index ? "2px solid silver" : 0}
                            onClick={() => setState(index)}
                            key={index}
                        >{item}</MusicTypeItem>)
                }
            </MusicTypesList>
            <MusicTypeDescription>
                <h1>{array[state]}</h1>
            </MusicTypeDescription>
        </>
    )
}

export default MusicTypes;