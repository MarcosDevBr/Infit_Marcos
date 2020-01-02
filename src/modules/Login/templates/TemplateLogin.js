import React from 'react'
import styled from 'styled-components'

export default function TemplateLogin({ logo, inputs, botaoLogin }) {
    return (
        <TemplateLoginWrapper className={'template-login-screen'}>
            <section className={'logomarca align-center'}>
                {logo}
            </section>
            <section className={'login-senha align-center'}>
                <div className={'input-holder'}>
                    {inputs}
                </div>
            </section>
            <section className={'botao-login align-center'}>
                {botaoLogin}
            </section>
        </TemplateLoginWrapper>
    )
}

const TemplateLoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('https://cdn.discordapp.com/attachments/208647663577464832/658115263371411527/a133b553-b215-41e5-ba41-a2dfd8678354.jpeg');
    background-repeat: no-repeat;
    background-size: cover;

    .align-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logomarca {
        height: 30%;
    }
    .login-senha {
        height: 40%;
    }
    .botao-login {
        height: 30%;
    }
`