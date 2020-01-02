import React, { useState } from 'react'

export default function SequenciaFibonacci() {

    const [numeroAtual, setNumeroAtual] = useState(null);
    const [contador, setContador] = useState(0);
    const [mensagem, setMensagem] = useState('Vamos iniciar o jogo');

    function getFibonnaciByNumberPosition(num) {
        var a = 1, b = 0, temp;

        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    }

    function onProximoNumeroInputChanges(evento) {
        setNumeroAtual(+evento.target.value)
    }

    function validarSeProximoNumeroDaSequenciaFibonacci() {
        if (!numeroAtual) return alert('Insira um numero')
        if (numeroAtual === getFibonnaciByNumberPosition(contador)) {
            setMensagem('Voce acertou digite o proximo numero')
            setContador(contador + 1)
            setNumeroAtual('')
        } else {
            setMensagem(`Voce errou o numero era, ${getFibonnaciByNumberPosition(contador)}`)
            setTimeout(() => setMensagem('Inicie o jogo novamente'), 2000)
            setContador(0)
            setNumeroAtual('')
        }

    }

    return (
        <div>
            <h1>Sequência de Fibonacci</h1>
            <h5>Sequência de Fibonacci é uma sucessão de números que obedecem um padrão em que cada elemento subsequente é a soma dos dois anteriores.</h5>
            <h3>Neste teste de lógica, você consegue adivinhar o número que vem em seguida?</h3>
            <input
                onChange={onProximoNumeroInputChanges}
                type={'number'}
                value={numeroAtual || ''}
            />
            <button onClick={validarSeProximoNumeroDaSequenciaFibonacci}>
                Adicionar Próximo Número
            </button>

            <h3>
                {mensagem}
            </h3>
        </div>
    )


}