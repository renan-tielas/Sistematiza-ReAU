import styles from '../../../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
// import { moveDown, moveLeft, moveRight, rotate } from '../actions'

export default function Controls(props) { return (

<div className={styles.controle} >
    
     {/* esquerd */}
     <button className={styles.controle_botao} onClick={(e) => {  }}>Esquerda</button>
    
            {/* right */}
            <button className={styles.controle_botao} onClick={(e) => {  }}>Direita</button>
    
            {/* rotate */}
            <button className={styles.controle_botao} onClick={(e) => {
    
            }}>Girar</button>
    
            {/* down */}
            <button className={styles.controle_botao} onClick={(e) => {
            }}>Baixo</button>
        </div>
    )
    } 