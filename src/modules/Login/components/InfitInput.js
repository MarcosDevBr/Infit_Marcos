import React from 'react'
import styled from 'styled-components'

export default function InfitInput({ placeholder, onChange, className }) {

    function quandoDigitar(evento) {
        if (!onChange) return
        onChange(evento.target.value)
    }

    return (
        <SInput
            placeholder={placeholder}
            onChange={quandoDigitar}
            className={className}
        />
    )
}

const SInput = styled.input`
    background-color: black;
    border: none;
    height: 40px;
    width: 280px;
    padding-left: 10px;
    color: white;
    padding-right: 10px;
    &::placeholder {
        text-align: center;
        font-size: 18px;
        color: white;
    }
`