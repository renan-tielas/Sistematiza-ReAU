import styles from '../../../styles/Home.module.css'



export default function Descricao(props) {
    return (
        <div className={styles.descricao}>
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <button className={styles.descricao_botao} onClick={(e) => {
            }}>Play</button>
            <button className={styles.descricao_botao} onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}