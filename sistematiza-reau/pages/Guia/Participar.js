import Link from 'next/link'

import styles from '../../styles/Home.module.css'
 
function Participar() {


    return (
        <div className={styles.dimensoes}>
            
                <h1 className={styles.titulo}>
                 Como participar da sistematização da ReAU
                </h1>
                <main className={styles.texto}>
<p>
              &#2609;  Se estiver chegando agora, vale ler desde o início: o resumo da proposta, as referências de sistematização da experiência da ANA e a metodologia. 
                
<br/>
<br/>
&#2609; Depois, abaixo disso está a sistematização em construção, aberta a contribuições :)
<br/><br/>
&#2609; São 4 “esquemas” de representação da ReAU: estrutura, comunicação, articulação e ações. Nos ajude a escrever e detalhar cada esquema, baseado na sua experiência e visão da rede.
<br/><br/>
&#2609; Por exemplo, na estrutura identificamos os grupos, as pessoas, as agroflorestas, etc..
<br/>Na comunicação o zap, as reuniões, os grupos de estudo …
<br/><br/>
&#2609; Complemente as listas dos esquemas, sugira novas coisas, ideias, categorias, o que achar que não foi dito sobre a ReAU.
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


export default Participar