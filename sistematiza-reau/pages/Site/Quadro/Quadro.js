import styles from '../../../styles/Home.module.css'

import Grade from './Grade'
import Bloco from './Bloco'
import Descricao from './Descricao'




function Quadro() {
  return (
    <div className={styles.Quadro}>
      <header className={styles.App_header}>
        <h1 className="App-title">Quadro</h1>
      </header>
      <Grade/>
      <Bloco/>
      <Descricao/>
    </div>
  );
}

export default Quadro;