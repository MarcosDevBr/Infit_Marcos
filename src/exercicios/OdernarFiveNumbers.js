import React, {useState, useEffect} from 'react'


export default function OrdernarFiceNumbers(){


  const [arry, setArry] = useState([]);
  const [numeroOrdenado, setnumeroOrdenado] = useState('');

  
 
  


  
  useEffect(quandoOArrayOriginalMudar, [numeroOrdenado])

  function quandoOArrayOriginalMudar(){
    if(!arry.length === 5) return
    if(arry.length === 5){
      arry.sort(function(a, b){
        return a - b
      })
      setArry([...arry])
      
    }
  }

  function onChangeInput(evento){
    setnumeroOrdenado(evento.target.value)
  }

  function QuandoForAdicionarNumero(){
    arry.push(+numeroOrdenado)
    setArry([...arry])
    setnumeroOrdenado('')


    console.log('aqui', arry )
  }

  function ReiniciarJogo(){
    setArry([])
   
    setnumeroOrdenado('')
    
  }
  
  return(



    <div>
      <h1>Digite 5 números e irei ordenar cada um deles</h1>
      <input
      onChange={onChangeInput}
      value={numeroOrdenado || ''}
      type={'Number'}
      />
      <button
      
      onClick={QuandoForAdicionarNumero}
      >Adicionar</button>
      <button
      onClick={ReiniciarJogo}
      >Reinicar jogo</button>


      {
        !numeroOrdenado &&
        arry.map((item) => (

        <h2>{numeroOrdenado}</h2>
        ))
      }
    </div>
  )

}