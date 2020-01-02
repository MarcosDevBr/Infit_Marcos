import React from 'react'
import styled from 'styled-components'

export default function TemplateExec({ execNav, exectext }) {
    return (
        <Wrapper>
            <div className={'exercicios'}>
                {execNav}
            </div>
            <div className={'texto'}>
                <div className={'texto-inner'}>
                    {exectext}
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
     width: 100%;
    height: 100%;
    display: flex;
    .exercicios {

        display: flex;
         width: 20%;
         height: 100%;
    }
    .texto {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .texto-inner {
            width: 85%;
            height: 85%;
        }
    }


`