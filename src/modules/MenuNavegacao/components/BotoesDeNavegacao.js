import React from 'react'
import BotaoDeNavegacao from './BotaoDeNavegacao'
import styled from 'styled-components'

export default function BotoesDeNavegacao() {
    return (
        <Wrapper>
            <BotaoDeNavegacao
                titulo={'Abdominais'}
            />
            <BotaoDeNavegacao
                titulo={'Pernas'}
            />
            <BotaoDeNavegacao titulo={'Biceps'}
            />
        </Wrapper>
             )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`