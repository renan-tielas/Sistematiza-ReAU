import styles from '../../../styles/Home.module.css'

import Quadrado from './Quadrado'

function Quadro() {
  return (
    <div className="App">
      <header className={styles.App_header}>
        <h1 className="App-title">Quadro Tetris</h1>
      </header>
      <Quadrado cor="1" />
    </div>
  );
}

export default Quadro;