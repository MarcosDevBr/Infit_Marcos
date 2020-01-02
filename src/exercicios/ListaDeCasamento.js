import React, { useState } from 'react'
import styled from 'styled-components'

export default function ListaDeCasamento() {
    const [list, setlist] = useState([]);
    const [convidado, setconvidado] = useState('');
    const [convidadoEditandoAtual, setConvidadoEditandoAtual] = useState(null);

    function onCliqueEditar(convidadoAtual) {
        setConvidadoEditandoAtual(convidadoAtual)
    }

    function onChangeInput(evento) {
        setConvidadoEditandoAtual({
            id: convidadoEditandoAtual.id,
            nome: evento.target.value,
        })
    }


    function onChangeConvidado(evento) {
        setconvidado(evento.target.value)
    }

    function AdicionarConvidados() {
        list.push({ id: list.length, nome: convidado })
        setlist([...list])
        setconvidado('')
    }

    function LastElementOfWarray() {
        list.pop(convidado)
        setlist([...list])
    }
    function removerConvidado(idConvidado) {
        const newArray = list.filter(convidado => convidado.id !== idConvidado)
        setlist([...newArray])
    }

    function confirmarEdicaoDoConvidado(convidadoEditado) {
        if (!convidadoEditandoAtual.nome) return alert('O nome do convidado nao pode ser vazio')
        const indexConvidadoEditado = list.findIndex((convidadoDaLista) => convidadoDaLista.id === convidadoEditado.id)
        list[indexConvidadoEditado] = convidadoEditandoAtual
        setlist([...list])
        setConvidadoEditandoAtual(null)
    }

    return (

        <div>
            <h1>Lista de Casamento do Lucas com Eduarda</h1>

            <input
                onChange={onChangeConvidado}
                value={convidado || ''}
            />

            <button onClick={AdicionarConvidados}>
                Adicionar Convidados
            </button>
            <button onClick={LastElementOfWarray}>
                Remover último Convidado
                </button>

            {
                list.map((convidado) => (

                    <React.Fragment key={convidado.id + ''}>
                        <h2>
                            {convidado.nome}

                        </h2>
                        <Butt
                            onClick={() => removerConvidado(convidado.id)}>Remover Convidado</Butt>
                        <But onClick={() => onCliqueEditar(convidado)}>
                            Editar Convidado
                        </But>
                        {
                            !!convidadoEditandoAtual &&
                            convidadoEditandoAtual.id === convidado.id &&
                            <div>
                                <input
                                    onChange={onChangeInput}
                                    value={convidadoEditandoAtual.nome}
                                />
                                <But onClick={() => confirmarEdicaoDoConvidado(convidado)}>
                                    Confirmar
                                </But>
                            </div>
                        }


                    </React.Fragment>


                ))
            }

        </div>

    )
}

const But = styled.button`
     font-family: Arial, Helvetica, sans-serif;
     text-transform: uppercase;
     font-size: 10px;
     font-weight: 700;
     border: none;
     padding: 5px;
     cursor: pointer;
     margin-left: 10px;
     background: rgba(25,229,230);
     border-radius: 20px;

`
const Butt = styled.button`
     font-family: Arial, Helvetica, sans-serif;
     text-transform: uppercase;
     font-size: 10px;
     font-weight: 700;
     border: none;
     padding: 5px;
     cursor: pointer;
     margin-left: 10px;
     background: rgba(245,85,61);
     border-radius: 20px;

`

