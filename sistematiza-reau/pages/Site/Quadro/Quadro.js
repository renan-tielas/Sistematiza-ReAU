import styles from '../../../styles/Home.module.css'

import Grade from './Grade'

function Quadro() {
  return (
    <div className="App">
      <header className={styles.App_header}>
        <h1 className="App-title">Quadro</h1>
      </header>
      <Grade/>
    </div>
  );
}

export default Quadro;