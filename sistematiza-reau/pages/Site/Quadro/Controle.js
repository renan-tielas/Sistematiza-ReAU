import styles from '../../../styles/Home.module.css'


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