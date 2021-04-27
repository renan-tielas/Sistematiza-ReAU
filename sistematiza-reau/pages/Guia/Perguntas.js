import Link from 'next/link'

import styles from '../../styles/Home.module.css'
import Pergunta from '../Componentes/Pergunta'
function Perguntas() {

    let resposta2 = <div>

        - 	Entendimento interno do funcionamento, dos desafios, dos potenciais<br />
-	Facilitação da visualização da rede, grupos, ações<br />
-	Sintetizar, teorizar e compartilhar aprendizados<br />
- 	Embasar planos e estratégias<br />
-	Preparar base conceitual para criação de uma ferramenta de rede social<br />

    </div>
    let resposta3 = <div>


        No contexto universitário<br />
Nas escalas do local / município / estado<br />
Nos aspectos de ensino, pesquisa e extensão<br />
Enquanto movimento social<br />
Enquanto agente da transição agroecológica local<br />
De acordo com ações, trabalhos e espaços cocriados<br />
Das perspectivas: social, organizativa, virtual, conceitual-visual, <br />
			      experiencial (de cada pessoa, grupo)

    </div>

let resposta4 = <div>


Penso que principalmente o momento atual.<br />
Quando relevante podemos nos valer das experiências e aprendizados do que já ocorreu.<br />
E quando oportuno prever ações e estratégias futuras.<br />
    </div>

let resposta5 = <div>

Definir eixos de sistematização para não dispersar muito a análise.<br />
<br />
Meu foco de interesse é a lógica de estruturação e funcionamento da rede, na perspectiva da comunicação, articulação e organização de ações


    </div>

let resposta6 = <div>


Relatos e análises de membros da rede, em reuniões, conversas e formulários.

    </div>

let resposta7 = <div>

<p>É este rumo que tomou a sistematização da experiência da ReAU, em dimensões estruturantes e subjetivas.
<br/><br/>
Clique aqui para entender melhor essas escolhas 
</p>
    </div>




    return (
        <div className={styles.dimensoes}>

            <h1 className={styles.titulo}>
                Como participar da sistematização da ReAU
                </h1>
            <main className={styles.texto}>
                <p>



                    {/* <div className={styles.pergunta}>
O que queremos sistematizar?</div>
<br/><br/>
	A experiência da ReAU e grupos integrantes
    <br/><br/> */}

                    <Pergunta pergunta='O que queremos sistematizar?'
                        resposta='A experiência da ReAU e grupos integrantes' />
                    <Pergunta pergunta='Para que propósitos fazer essa sistematização?'
                        resposta={resposta2} />
                    <Pergunta pergunta='De que formas podemos entender a experiência da ReAU?'
                        resposta={resposta3} />
<Pergunta pergunta='Qual período de tempo levaremos em conta?'
                        resposta={resposta4} />

<Pergunta pergunta='Quais aspectos centrais nos interessa sistematizar?'
                        resposta={resposta5} />

<Pergunta pergunta='Quais fontes de informação vamos usar?'
                        resposta={resposta6} />

<Pergunta pergunta='
Podemos dividir o funcionamento em diferentes dimensões?'
                        resposta={resposta7} />











<br /><br />
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


export default Perguntas