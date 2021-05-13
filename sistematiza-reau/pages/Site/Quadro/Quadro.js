import styles from '../../../styles/Home.module.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import redutores from '../Redutores/indice_Red'

import Grade from './Grade'
import Bloco from './Bloco'
import Descricao from './Descricao'
import Controle from './Controle'
import Mensagem from './Componentes/Mensagem'



function Quadro() {
  return (
    <div className={styles.Quadro}>
      <header className={styles.App_header}>
        <h1 className="App-title">Quadro</h1>
      </header>
      <Grade/>
      <Bloco/>
      <Descricao/>
      <Controle/>
      <Mensagem/>
    </div>
  );
}

export default Quadro;