import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function BotaoQuebrado({ titulo }) {
    useEffect(tituloChange, [titulo])
    const [change, setchange] = useState('');
    function tituloChange() {
        if (titulo.length >= 18) {
            setchange(titulo.slice(0, 15) + '...')
        }
        else {
            setchange(titulo)
        }
    }


    return (
        <div>
            <But>{change}</But>
        </div>
    )
}

const But = styled.button`
     width: 130px;
    height: 30px;
    background-color: red;
    color: white;
`