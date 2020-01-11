import React, { useState } from 'react'
import styled from 'styled-components'

export default function MoverBola() {
    const [cebolinha, setCebolinha] = useState(false);
    function Moverbola() {
        setCebolinha(!cebolinha)
    }



    return (
        <div>
            <h1>Animação mova a bola</h1>
            <button onClick={Moverbola}>Mover bola</button>
            <Bola
                cebolinha={cebolinha}
            />

        </div>
    )
}

const Bola = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50px;
    left: ${props => props.cebolinha ? '0' : '90%'};
    transition: left 2s;
    
`

