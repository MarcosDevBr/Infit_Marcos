import React from 'react'
import styled from 'styled-components'

export default function TemplateMenuNavagacao({ logo, botoesDeNavegacao }) {
    return (
        <Wraper>
            <section className={"menulogo align-center "}>
                {logo}
            </section>
            <section className={"nav align-center"}>
                {botoesDeNavegacao}
            </section>
        </Wraper>
    )


}

const Wraper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('https://cdn.discordapp.com/attachments/208647663577464832/658115263371411527/a133b553-b215-41e5-ba41-a2dfd8678354.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    .menulogo {
        height: 30%;
        }
    .nav {
        height: 80%;
    }
    .align-center {
        display: flex;
        align-items: center;
        justify-content: center;



`