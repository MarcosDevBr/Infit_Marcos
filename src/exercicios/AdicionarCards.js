import React,  { useState } from 'react'
import styled from 'styled-components'
import { Input, Card, Avatar, Modal } from 'antd';


export default function AdicionarCards(){
  
  const [listOfname, setlistOfname] = useState([]);
  const [nomeInserido, setnomeInserido] = useState('');
  const [avatarInserido, setAvatarInserido] = useState('');
  const [nomeInseridoAtual, setNomeInseridoAtual] = useState(null);
  const [visible, setVisible] = useState(false)


  function chamadaGenerica(cebolinha) {
    setVisible(cebolinha)
  }

  function qunadoMudarInputAvatar(evento){
    setAvatarInserido(evento.target.value)
  }
//Adicionar nome na lista/Card 
  function quandoClicadoNoBotao(){
    listOfname.push({ id: listOfname.length, nome: nomeInserido, Avatar: avatarInserido })
    setlistOfname([...listOfname])
    setnomeInserido('')
    setAvatarInserido('')
    console.log('cai aqui', listOfname)
  }
// Deletar por id 
  function quandoClicarEmDeletar(idnomeInserido){
    const newArray = listOfname.filter(nomeInserido => nomeInserido.id !== idnomeInserido)
    setlistOfname([...newArray])
  }

// Deletar ultimo elemnto da Arry
  function LastElementOfWarray() {
    listOfname.pop(nomeInserido)
    setlistOfname([...listOfname])
}

  function onCliqueEditar(nomeAtual) {
    setNomeInseridoAtual(nomeAtual)
  }

  function quandoClicarEditar(nomeInseridoEditado){
    if (!nomeInseridoAtual.nome) return alert('O nome do convidado nao pode ser vazio')
    const indexnomeInseridoEditado = listOfname.findIndex((nomeInseridoNalista) => nomeInseridoNalista.id === nomeInseridoEditado.id)
    listOfname[indexnomeInseridoEditado] = nomeInseridoAtual
    setlistOfname([...listOfname])
    setNomeInseridoAtual(null)
    }



  function quandoMudarInput(evento){
    setnomeInserido(evento.target.value)
  }

  function onChangeInputEitar(evento) {
    setNomeInseridoAtual({
        id: nomeInseridoAtual.id,
        nome: evento.target.value,
        avatar: evento.target.value,
    })
  }

 

  return(
    <div>
   
    <h1>Adicionar Cards</h1>

      <DivPersonalizada>
            <label>Nome</label> <Input placeholder="Basic usage"
            onChange={quandoMudarInput}
            value={nomeInserido || ''}
            />
            <label>Link da foto para Avatar</label><Input 
            onChange={qunadoMudarInputAvatar}
            value={avatarInserido || ''}
            addonBefore="Http://" addonAfter=".com"/>
    </DivPersonalizada>

    <DivPersonalizadaII> 

        <button
        onClick={quandoClicadoNoBotao}

        >Adicionar</button>

        <button
        onClick={LastElementOfWarray}
        >Deletar ultimo Adicionado</button>
    {
    listOfname.map((integranteDaLista) => (

    <React.Fragment key={integranteDaLista.id + ''}>


        <Card 
        title={integranteDaLista.nome}
        style={{ width: 1000, marginTop: 20 }} 
        >

        <div><Avatar src={integranteDaLista.avatar} /></div>

        <button
        onClick={() => quandoClicarEmDeletar(integranteDaLista.id)}>
        Deletar
        </button> 

        <button
        onClick={() => onCliqueEditar(integranteDaLista)}>
          Editar
          </button>
                  {
                  !!nomeInseridoAtual &&
                  nomeInseridoAtual.id === integranteDaLista.id &&
                    <div>
                      <input
                      onChange={onChangeInputEitar}
                      value={nomeInseridoAtual.nome}
                      />
                      <button
                      onClick={() => quandoClicarEditar(integranteDaLista)}>
                      Confirmar
                      </button>

                      
                     


                    </div>
                  }

          </Card>

         
    </React.Fragment>
        ))


      }

        </DivPersonalizadaII>

    </div>  
  )
}













const DivPersonalizada = styled.div`
    padding-left: 30%;
    padding-right: 30%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
     
`

const DivPersonalizadaII = styled.div`
    display: block;
    margin-left: 160px;
   
   
   
   
   
   
   
   
   
  
     
`