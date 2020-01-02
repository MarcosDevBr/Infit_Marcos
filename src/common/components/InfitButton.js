import React from 'react'
import styled from 'styled-components'

export default function InfitButton({onClick, titulo}) {
    return (
        <SButton onClick={onClick}>
            <span>
                {titulo}
            </span>
        </SButton>
    )
}

const SButton = styled.button`
    background-color: transparent;
    border: 5px solid black;
    height: 70px;
    width: 140px;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
        background-color: black;
        span {
            color: white;
        }
    }
    span {
        color: black;
        text-transform: uppercase;
        font-weight: 800;
    }

`