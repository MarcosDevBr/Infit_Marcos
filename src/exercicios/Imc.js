import React, { useState, useEffect } from 'react'
export default function Imc() {
 const [resultado, setResultado] = useState(0);

    useEffect(ImcBomOuRuim, [resultado])
    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);

    function ImcAltura(evento) {
        setAltura(evento.target.value)
    }
    function ImcPeso(evento) {
        setPeso(evento.target.value)
    }
    function ImcResultado() {
        setResultado(Peso / (Altura * Altura))
    }
    function ImcBomOuRuim() {
            if (!resultado) return

            if (resultado < 18.5) {
                alert('Magraza, Sugiro fazer um exame ou rever sua alimentação :( ')
            }
            else if (resultado > 18.5 || resultado < 24.9) {
                alert('Peso NORMAL, Parabéns Continue assim <3')
            }
           /*  else if (resultado > 25.0 || resultado < 29.9) {
                alert('SOBREPESO, OBESIDADE (I) ')
            }
            else if (resultado > 30.0 || resultado < 39.9) {
                alert('OBESIDADE, OBESIDADE (II)')
            }
            else if (resultado > 40.0) {
                alert('OBESIDADE GRAVE, OBESIDADE (III) :(')
            } */

            else {
                setResultado(resultado)
            }
        }

        return (

            <div>
                <h1>Cálculo IMC</h1>
                <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde,para calcular o peso ideal de cada pessoa.</p>
                <h5>Altura (ex.: 1,70)</h5>
                <input type={'number'} onChange={ImcAltura} />
                <h5> Peso (ex.: 69,2)</h5>
                <input type={'number'} onChange={ImcPeso} />
                <div>
                    <button onClick={ImcResultado}>Calcular IMC</button>
                    {
                        !!resultado &&
                        <h3>
                            {resultado.toFixed(2)}
                        </h3>
                    }

                </div>
            </div>
        )


    }