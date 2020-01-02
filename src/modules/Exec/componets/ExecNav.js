import React from 'react'
import styled from 'styled-components'
export default function ExecNav() {
    return (
        <ButtonExercicio>
            Agachamento
        </ButtonExercicio>
    )
}
const ButtonExercicio = styled.button`
    width:150px;
    height: 150px;
    background: black;
    text-align: center;
    color: white;
    transition: background-color 0.5s;

     &:hover {
        background-color: white;
        color: black;
}
`

