import React, { useState } from 'react'

export default function LoginEsenha() {
    const [Login, SetLogin] = useState('');
    const [Senha, SetSenha] = useState('');
    function NomeLogin(evento) {
        SetLogin(evento.target.value)
    }
    function SenhaLogin(evento) {
        SetSenha(evento.target.value)
    }
    function LogarNoSistema() {
        if (Login === 'Lucas' && Senha === 'Lucas')
            alert('Bem vindo ao sistema do Marcos :) ')
       else{alert(' ops :( - > Senha ou Login INVALIDO')}
    }


 return (
        <div>
         <h1>Tela de Login</h1>
         <h2>Sistema do Marcos</h2>
         <label>Login</label>
         <input onChange={NomeLogin}></input>
            <div>
         <label>Senha</label>
             <input onChange={SenhaLogin}></input>
         </div>
         <button onClick={LogarNoSistema}>ENTRAR</button>
        </div>
    )
}