import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import LoginScreen from './modules/Login/screen/LoginScreen';
import MenuNavagacaoScreen from './modules/MenuNavegacao/screen/MenuNavegacaoScreen';
import ExecScreen from './modules/Exec/screen/ExecSreen';
import Incrementador from './exercicios/Incrementador';
import SomaDoisNumeros from './exercicios/SomaDoisNumeros';
import GokuOuVegeta from './exercicios/GokuOuVegeta';
import AnimacaoBola from './exercicios/AnimacaoBola';
import ValidacaoDeLogin from './exercicios/ValidacaoDeLogin';
import BotaoQuebrado from './exercicios/BotaoQuebrado';
import ListaDeCasamento from './exercicios/ListaDeCasamento';
import Imc from './exercicios/Imc';
import SequenciaFibonacci from './exercicios/SequenciaFibonacci';
import UtilizandoBiblioteca from './exercicios/UtilizandoBibliotecaDeDesing';

function App() {
  return (
    <div className="App" style={{width: '100vw', height: '100vh'}}>
      {/* <LoginScreen/> */}
      {/* <MenuNavagacaoScreen/> */}
      {/* <ExecScreen/> */}
      {/* <Incrementador/> */}
      {/* <SomaDoisNumeros/> */}
      {/* <GokuOuVegeta/> */}
      {/* <AnimacaoBola/> */}
      {/* <ValidacaoDeLogin/> */}
      {/* <BotaoQuebrado titulo={'Olha que texto gigante que o lucas esta escrevendo'}/> */}
      {/* {<ListaDeCasamento />} */}
      {<UtilizandoBiblioteca />}
      {/*{<Imc />}*/}
      {/*{<SequenciaFibonacci />}*/}
    </div>
  );
}

export default App;
