import styles from '../../../../styles/Home.module.css'
import { useSelector } from 'react-redux'

export default function Mensagem(props) {
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)
    return (
      <div className={styles.mensagem}>
        <h1>Message Title</h1>
        <p>Message info...</p>
      </div>
    )
  }