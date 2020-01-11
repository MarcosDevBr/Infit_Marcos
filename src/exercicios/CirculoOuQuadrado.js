import React, { useState, useEffect } from 'react'

import styled from 'styled-components'


export default function CirculoOuQuadrado() {
  const [figuraGeometrica, setFiguraGeometrica] = useState(true );
  const [figuraGeometrica2, setFiguraGeometrica2] = useState(false);

  useEffect(QuandoFiguraGeometricaMudar, [figuraGeometrica, figuraGeometrica2])
  
  function QuandoFiguraGeometricaMudar(){
    if(!figuraGeometrica === figuraGeometrica2) return
    if(figuraGeometrica === figuraGeometrica2){
      alert('Atenção!, temos figuras geometricas iguais aqui')
    }
  }



  function I_QuandoClicarNobutton(){
    setFiguraGeometrica(!figuraGeometrica)
    
  }

  function II_QuandoClicarNobutton(){
    setFiguraGeometrica2(!figuraGeometrica2)
    
  }


  return(

    <div>
     <button onClick={II_QuandoClicarNobutton}>Mudar formula geometrica</button>
      <Bola
        figuraGeometrica={figuraGeometrica}
      />



<div>
<button onClick={I_QuandoClicarNobutton}>Mudar formula geometrica</button>
      <Bolla
        figuraGeometrica2={figuraGeometrica2}
      />

</div>
  
    </div>
  

  )
}


const Bola = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: ${props => props.figuraGeometrica ? '50%' : '0%'};
    transition: left 2s;
    left: 900px;
    top: 300px;
`
const Bolla = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: ${props => props.figuraGeometrica2 ? '50%' : '0%'};
    transition: left 2s;
    left: 700px;
    top: 300px;
  
    
`
