import React from 'react'
import TemplateLogin from '../templates/TemplateLogin'
import InfitButton from '../../../common/components/InfitButton'
import InputsLoginESenha from '../components/InputsLoginESenha'
import LogoInfit from '../../../common/components/LogoInfit'

export default function LoginScreen() {



    return (
        <TemplateLogin
            logo={<LogoInfit/>}
            botaoLogin={<InfitButton titulo={'Entrar'} />}
            inputs={<InputsLoginESenha/>}
        />
    )
}