import React from 'react'
import InfitInput from './InfitInput'
import styled from 'styled-components'

export default function InputsLoginESenha() {
    return (
        <Wrapper>
            <InfitInput
                className={'login-input'}
                placeholder={'Login'}
            />
            <InfitInput placeholder={'Senha'}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .login-input {
        margin-bottom: 15px;
    }
`