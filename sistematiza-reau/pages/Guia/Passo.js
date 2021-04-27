import Link from 'next/link'

import styles from '../../styles/Home.module.css'
 
function Passo() {


    return (
        <div className={styles.dimensoes}>
            
                <h1 className={styles.titulo}>
                 O que está acontecendo agora na sistematização?
                </h1>
                <main className={styles.texto}>
<p>

<div className={styles.rosito}>
1 - Sistematização no nível da rede <br/>de hoje até 28/04
<br/><br/>
 
-   Construção do site para participação<br/>
-   Definição dos conceitos gerais da sistematização<br/>
-   Detalhamento das experiências da rede (ver limite de detalhamento)<br/>
<br/><br/>
</div>
2 - Sistematização no nível dos grupos - 28/04 até 07/05
<br/><br/>
Construção do formulário para participação

<br/><br/>
<br/><br/>
&#2609; Dúvidas pode mandar zap no grupo da ReAU ou pro Renan
</p>
                    </main>
                    <Link href="/">
         <a
         className={styles.card}>Voltar</a>
       </Link>
                    </div>
    )
}


export default Passo