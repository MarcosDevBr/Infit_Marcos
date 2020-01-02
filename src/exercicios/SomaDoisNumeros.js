import React, { useState } from 'react'

export default function SomarDoisNumeros() {
    const [resultado, setResultado] = useState(null);
    const [PrimeiroNumero, setPrimeiroNumero] = useState(0);
    const [SegundoNumero, setSegundoNumero] = useState(0);

    function PrimeiroInputr(evento) {
        setPrimeiroNumero(+evento.target.value)
    }

    function SegundoInputr(evento) {
        setSegundoNumero(+evento.target.value)
    }

    function SomarDoisNumeros() {
        setResultado(PrimeiroNumero + SegundoNumero)
    }

    return (

        <div>
            <h5>Programa para somar dois números</h5>
            <label>Digite o primeiro Número</label>
            <input onChange={PrimeiroInputr} type={'number'}></input>

            <label>Digite o primeiro Número</label>
            <input onChange={SegundoInputr} type={'number'}></input>

            <button onClick={SomarDoisNumeros} type={'Number'}>Resultado</button>
            <h5>O resultado da soma dos dois números é {resultado}</h5>


        </div>

    )
}
