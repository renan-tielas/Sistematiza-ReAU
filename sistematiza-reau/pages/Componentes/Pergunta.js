import Link from 'next/link'

import styles from '../../styles/Home.module.css'

function Pergunta({ pergunta, resposta }) {
    return (

        <div>

            <br />
            <div className={styles.negrito}>
                {pergunta}</div>

            <div>
            <br />
                {resposta}</div>
                <br />


        </div>
    )
}


export default Pergunta