import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from 'antd';
import { List, Avatar } from 'antd';



export default function UtilizandoBiblioteca() {
    const [listDeConvidados, setlistDeConvidados] = useState([]);
    const [convidado, setConvidado] = useState('');
    const [convidadoEditandoAtual, setConvidadoEditandoAtual] = useState(null);



    // Quando for clicado no botão editar
    function onCliqueEditar(convidadoAtual) {
        setConvidadoEditandoAtual(convidadoAtual)

    }

    // Quando for digitado no Input a alteração do nome
    function onChangeInput(evento) {
        setConvidadoEditandoAtual({
            id: convidadoEditandoAtual.id,
            nome: evento.target.value,
        })
    }
    //Qunado for digitado no input ativa essa função
    function I_QuandoForDigitadoConvidado(evento) {
        setConvidado(evento.target.value)
    }

    //Quando for clicado no botão ativa essa função
    function II_QuandoForClicadoButtoAdiconarConvidado() {
        if (!convidado) return alert('O nome do convidado nao pode ser vazio')
        listDeConvidados.push({ id: listDeConvidados.length, nome: convidado })
        console.log('estou aqui', listDeConvidados)
        setlistDeConvidados([...listDeConvidados])
        setConvidado('')
    }
    //Quando for clicado no botão para remover ultimo convidado
    function QuandoClicarEmDeletarUltimoCOnvidado() {
        listDeConvidados.pop(convidado)
        setlistDeConvidados([...listDeConvidados])
    }
    //Quando for clicado para remover CONVIDADO NA PROPRIA LISTA
    function removerConvidadoPorId(idConvidado) {
        const newArray = listDeConvidados.filter(convidado => convidado.id !== idConvidado)
        setlistDeConvidados([...newArray])
    }

    //QUnado for clicado para editar o convidado adicionado na lista
    function confirmarEdicaoDoConvidado(ConvidadoEditado) {
        if (!convidadoEditandoAtual.nome) return alert('O nome do convidado nao pode ser vazio,Por favor digite a alteração desejada')
        const indexConvidadoEditado = listDeConvidados.findIndex((convidadoDaFesta) => convidadoDaFesta.id === ConvidadoEditado.id)
        listDeConvidados[indexConvidadoEditado] = convidadoEditandoAtual
        setlistDeConvidados([...listDeConvidados])
        setConvidadoEditandoAtual(null)
    }

    return (
        <div>

            <h3 style={{ margin: '16px 0' }}>Lista de convidados para o casamento</h3>
            <DivEstilizada>

                {/* input para adicionar os convidados................................................... */}
                <InputEstilizado
                    onChange={I_QuandoForDigitadoConvidado}
                    placeholder="Basic usage"
                    value={convidado || ''}
                />
                {/* Button para adicionar os convidados digitados no input............................. */}
                <Button
                    onClick={II_QuandoForClicadoButtoAdiconarConvidado}
                    type="primary"
                    size={'small'}
                    shape={'squere'}
                >
                    Adicionar
                </Button>
                {/* Button para remover o ultimo convidado adicionado.....................................*/}
                <Button
                    onClick={QuandoClicarEmDeletarUltimoCOnvidado}
                    type="primary"
                    size={'small'}
                    shape={'squere'}
                >Deletar Ultimo Convidado</Button>
            </DivEstilizada>


            <React.Fragment >

                <List
                    itemLayout="horizontal"
                    dataSource={listDeConvidados}
                    renderItem={convidadoDaLista => (
                        <List.Item
                            actions={[
                                <Button
                                    onClick={() => onCliqueEditar(convidadoDaLista)}
                                    type="primary" size={'small'}
                                    shape={'squere'}
                                >
                                    Editar
                                        </Button>,

                                <Button
                                    onClick={() => removerConvidadoPorId(convidadoDaLista.id)}
                                    type="primary" size={'small'}
                                    shape={'squere'}
                                >
                                    Deletar Convidado
                                        </Button>
                            ]}
                        >


                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={
                                    <a>{convidadoDaLista.nome}</a>
                                }
                            />

                            {
                                !!convidadoEditandoAtual &&
                                convidadoEditandoAtual.id === convidadoDaLista.id &&
                                <div>
                                    <InputEstilizado
                                        onChange={onChangeInput}
                                        value={convidadoEditandoAtual.nome}
                                    />

                                    <Button
                                        onClick={() => confirmarEdicaoDoConvidado(convidadoDaLista)}
                                        type="primary" size={'small'}
                                        shape={'squere'}
                                    >
                                        Editar
                                </Button>
                                </div>
                            }


                        </List.Item>
                    )}
                />


            </React.Fragment>
        </div>
    )
}


const InputEstilizado = styled(Input)`
        width: 300px;
    `

const DivEstilizada = styled.div`
    display: block;
    align-items: center;


    `

