import React from 'react'
import styled from 'styled-components'


export default function ExecText() {
    return (
        <Wrapper>

            <h1 className={'titulo'}>Agachamentos</h1>
            <div className={'bloco1'}>

                <p>1 - Ajustar o apoio das pernas um pouco acima da linha da articulação
 do tornozelo e com o braço em mximo de amplitude possível;<br />

                    <br /> 2 - Ajustar o encosto de modo que as costas fiquem completamente apoiadas;<br />

                    <br /> 3 - A parte posterior do joelho deve estar completamente apoiada no assento;<br />

                    <br /> 4 - Manter a ponta dos pés apontadas para cima;<br />

                    <br /> 5 - Estender completamente os joelhos, sem realizar o encaixe articular.<br />
                </p>

                <p className={'obs'}><br />OBS:<br />
                    <br />O exercício cadeira extensora (extensão de perna ou joelho) serve para para
 a hipertrofia, fortalecimento ou desenvolvimento dos seguintes músculos:

Quadríceps.</p>


            </div>


            <div className={'imgtext'}>
                <img className={'img1'} src='https://cdn.discordapp.com/attachments/208647663577464832/658115263371411527/a133b553-b215-41e5-ba41-a2dfd8678354.jpeg' />
                <img className={'img2'} src='https://cdn.discordapp.com/attachments/208647663577464832/658115263371411527/a133b553-b215-41e5-ba41-a2dfd8678354.jpeg' />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   Display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */


.titulo{
    text-transform: uppercase;
    text-align: center;

}

.obs{
    padding-left: 60px;
    text-align: center;


}

}
.imgtext{
    position: relative;
    display: flex;

    .img1{
    width:300px;

    height:180px;



}
    .img2 {
            position: absolute;
            right: 35px;
            top: -140px;
            margin-left: 50px;
            width: 350px;
            height: 280px;
            object-fit: cover;




    }
}

.bloco1{
    display: flex;
     text-align: left;


}

`