import Link from 'next/link'

import styles from '../../styles/Home.module.css'
 
function Passo() {


    return (
        <div className={styles.dimensoes}>
            
                <h1 className={styles.titulo}>
                 Como participar da sistematização da ReAU
                </h1>
                <main className={styles.texto}>
<p>


O processo de sistematização tem 2 níveis: rede e grupos.
<br/><br/>
<div className={styles.negrito}>
O seguinte é um esboço de metodologia para o nível da rede.
</div>
<br/><br/>
1 &rarr;	A partir da experiência prática, fazer perguntas relevantes para orientar a			sistematização.
<br/><br/>
2&rarr; 	Esquematizar as respostas, buscando representar a experiência prática, e formar	um mapa conceitual coeso
<br/><br/>
3&rarr; 	Apresentar essas informações (em contínua construção coletiva) em um site, para	facilitar o direcionamento da leitura e contribuição dos participantes.
<br/><br/>
Perguntas a respeito do próprio tópico onde se encontram, estão em parenteses, a serem respondidas.
<br/><br/>
Contribuições podem ser feitas através do whatsapp, email, ou alteração do arquivo que é fonte das informações escritas no drive.
<br/><br/>
	
4&rarr; 	Contribuições feitas através de grupo de gestão da ReAU, no aplicativo whatsapp, email e/ou através de formulários. Outra opção é alteração do arquivo que é fonte das informações escritas no drive.
<br/><br/>

5&rarr;	Recordar e pensar a experiência da ReAU em relação às respostas; fazer mais 		perguntas, e esquematizar as respostas
<br/><br/>
6&rarr;	Desenhar de maneira geral o sistema e suas funcionalidades
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