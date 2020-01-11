import React, { useState, useEffect } from 'react'

export default function NovoIncrementador(){
  
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(0);

  useEffect(quandoStateMudar, [count, count2])

  function quandoStateMudar(){
    if(count !== count2) return
    if(count === count2){
      alert('Ops')
    }
  }

  function QuandoClicadoParaIncrementar(){
    setCount(count + 1)
  }

  function QuandoClicadoParaDecrementar(){
    setCount(count - 1)
  }

//Segundo contador................................................

  
  function II_QuandoClicadoParaIncrementar(){
    setCount2(count2 + 1)
  }

  function II_QuandoClicadoParaDecrementar(){
    setCount2(count2 - 1)
  }



return(



  <div>
    <h1>Primeiro Contador</h1>
    <h2>{count}</h2>


    <button
    onClick={QuandoClicadoParaDecrementar}
    >Decrementar
    </button> 
    <button
     onClick={QuandoClicadoParaIncrementar}
    >Incrementar
    </button>

<div>  

<h1>Segundo Contador</h1>
    <h2>{count2}</h2>
    <button
    onClick={II_QuandoClicadoParaDecrementar}
    >Decrementar
    </button> 
    <button
     onClick={II_QuandoClicadoParaIncrementar}
    >Incrementar
    </button>
    
    </div>
   
  </div>
)
}