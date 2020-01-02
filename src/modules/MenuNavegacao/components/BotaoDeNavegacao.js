import React from 'react'
import styled from 'styled-components'

export default function BotaoDeNavegacao({ titulo, onClick }) {
    function onMouseClick() {
        if (!onClick) return
        onClick()
    }
    return (
        <ButtonDoMenu onClick={onMouseClick}>
            {titulo}
        </ButtonDoMenu>
    )
}

const ButtonDoMenu = styled.button`
    height: 110px;
    width:  500px;
    border-radius: 31px;
    border: 3px solid black;
    background-size: cover;
    color: black;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    }

&:hover {
    background-color: black;
    color: white;

}




`