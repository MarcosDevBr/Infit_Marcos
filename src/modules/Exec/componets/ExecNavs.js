import React from 'react'
import ExecNav from './ExecNav'
import styled from 'styled-components'


export default function ExecNavs() {
    return (
        <Wrapper>
            <ExecNav
                titulo={'Agachamento'}
            />

            <ExecNav
                titulo={'Extensões de pernas'}
            />
            <ExecNav
                titulo={'Agachamento com barras'}
            />

            <ExecNav
                titulo={'Hack Squats'}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    `
