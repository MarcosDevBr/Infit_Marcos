import React from 'react'
import TemplateMenuNavegacao from '../template/TemplateMenuNavegacao'
import LogoInfit from '../../../common/components/LogoInfit'
import BotaoDeNavegacao from '../components/BotaoDeNavegacao'
import BotoesDeNavegacao from '../components/BotoesDeNavegacao'

export default function MenuNavagacaoScreen() {



    return (
        <TemplateMenuNavegacao
            botoesDeNavegacao={<BotoesDeNavegacao/>}
            logo={<LogoInfit />}
        />
    )
}