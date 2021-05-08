import Link from 'next/link'
import Dimensao from './DimensaoEstruturante'
import DimECartão from './DimensaoEstruturante_Cartao'
import styles from '../../styles/Home.module.css'
import React from 'react'
import { useState } from 'react'

let dimensao_clicada
function DimensõesE() {


      // arquivo com instancias das dimensoes estruturantes 
      // a serem renderizadas por outros componentes



      // Estado de renderização inicial vs dimensão especifica
      
      
      const [renderiza_interrogacao, setRenderiza] = useState('inicio')
      // renderizaDimensao = 

      const interruptorRenderizacao = (dimensao) => {
            dimensao_clicada = dimensao

            if (renderiza_interrogacao == 'inicio') {
                  setRenderiza('dimensao_especifica')
            } else { setRenderiza('inicio') }
             console.log(dimensao)
      }



      // DADOS



      const estrutura = {
            titulo: "Estrutura",
            perguntas: ['Como podemos entender a estrutura interna da reau?',
            'O que queremos facilitar através dessa estrutura?'],
            significado: " Elementos que embasam todo o funcionamento",
            valores: [],
            propositos: ['A dimensão física da ReAU, de onde emergem as demais dimensões'],
            componentes: ['Vivos', 'Físicos', 'Virtuais'],
            elementos: ['Pessoas', 'Coletivos', 'Parceiros', 'Espaços (Agroecológicos, de Convívio)','Instituições', 'Redes Virtuais'],
            // exemplares: "",
            perspectivas: ['Interna','Externa'],
            // escalas: "",
            // dinamicas: "",
            // desafios: "",
            indicadores: ['Interdependência entre os projetos?','A estrutura propicia a autogestão?'],
            // temporalidade: ""
      }
      const comunicacao = {
            titulo: "Comunicação",
            perguntas: [],
            significado: "Detalha as relações/elos de comunicação entre os nós",
            valores: [],
            propositos: ['não preenchido'],
            // componentes: "",
            elementos: ['a','b'],
            // exemplares: "",
            perspectivas: ['Comunicação Interna', 'Comunicação Externa'],
            // escalas: " ",
            dinamicas: ["Como acontece a comunicação? Que efeitos os meios de comunicação escolhidos tem? "],
            desafios: "",
            indicadores: "O que esperamos da comunicação? O que queremos comunicar? Está sendo efetivo?",
            temporalidade: ""
      }
      const organizacao = {
            titulo: "Organização",
            perguntas: ['O que precisamos organizar? Como?'],
            significado: "Compreende as coisas que são pertinentes de serem organizadas",
            valores: [],
            propositos: ["não preenchido"],
            componentes: ['   Compreende as coisas que são pertinentes de serem organizadas' ],
            elementos: ['Atas', 'Material Didatico', 'Ações e demadas - listagem interativa, detalhada'],
            exemplares: "",
            //   perspectivas: "",
            //   escalas: " ",
            dinamicas: [''],
            indicadores: "",
            temporalidade: "",
      }
      const articulacao = {
            titulo: "Articulação",
            perguntas: ['O que são e no que consistem as nossas articulações?',
                  'Como ocorrem essas articulações?',
                  'No que já estamos envolvidos?',
                  'O que queremos articular?',],
            significado: " Aquilo que fica da comunicação e organização. As idéias, os combinados, os grupos de trabalho, os mutirões, as representações, as articulações em redes, os espaços de consulta, os fórums … ",
            valores: [],
            propositos: ['Quais objetivos da ReAU?','Como podemos articular para atingir esses objetivos?'],
            componentes: ['Atores', 'Grupos', 'Redes','Articulações', 'Instituições', 'Espaços de Consulta', 'Frentes'],
            elementos: ['Pessoas',
                  'Grupos',
                  'Redes',
                  'RedeCAU',
                  'AARJ',
                  'REGA',
                  'Aliança Nacional pela Alimentação Saudável',
                  'ONU (GT)',
                  '',
                  'Participação da rede em articulação - Através de pessoa,',
                  'Planejamento de ações',
                  '',
                  'Plano diretor UFRJ',
                  'Plano diretor Rio de Janeiro',
                  'Frente Parlamentar de Agroecologia do Rio de Janeiro',
                  'Fórum Ambiental da UFRJ',
                  'Conselho Municipal de Economia Solidária',],
            elos:['Formas de participação','Planejamento de ações'],
                  exemplares: "",
            perspectivas: ['Articulação Interna','Articulação Externa'],
            escalas: ['UFRJ', 'Fundão', 'Maré', 'Municipal', 'Regional', 'Nacional'],
            dinamicas: [" Busca da Autogestão  Listar coisas possíveis, “esperadas”, de serem feitas na autogestão da rede. Coisas que todos podem fazer ou participar, mas talvez não saibam sobre. Assim como responsabilidades de todos. ",
       ' Como a autogestão se dá em cada elemento, e entre elementos?',
      'Pessoas com grupos',
      'Porque um grupo não participa das reuniões? O que falta para essa participação dos grupos? ',
      'Trazer o entendimento que podemos ser uma grande rede de apoio',
      'Uma proposta de um grupo deve ser apoiada pela rede. As vezes o grupo não acha que isso vai acontecer',
      'O que mobiliza as pessoas a participarem de cada coisa? Ações pontuais'],
            indicadores: "",
            temporalidade: "",
      }
      const acoes = {
            titulo: "Ações"
      }
      const frutos = {
            titulo: "Frutos"
      }

      // seletor de estado da dimensao
     

      // const colocaDimensao = ( )

      return (
            <div>
                  {renderiza_interrogacao === 'inicio' && (
                        <div className={styles.dimensoes}>

                              <h1 className={styles.title}>
                                    Dimensões da Experiência da ReAU
</h1>
                              <main className={styles.quadro}>
                                    {/* <Dimensao dimensao={estrutura}></Dimensao>
<Dimensao dimensao={comunicacao}></Dimensao> */}
                                    {/* <Dimensao dimensao="articula    cao"></Dimensao> */}

                                    {/* dimensao_clicada=estrutura */}

                                    {/* <div className={styles.cartao} customClickEvent={interruptorRenderizacao}> */}
                                    <DimECartão dimensao={estrutura} onClick={() => interruptorRenderizacao(estrutura)} />
                                    {/* </div> */}
                                    
                                    {/* <DimECartão dimensao={estrutura} /> */}
                                    <DimECartão dimensao={comunicacao} onClick={() => interruptorRenderizacao(comunicacao)}/>

                                    <DimECartão dimensao={organizacao}onClick={() => interruptorRenderizacao(organizacao)} />
                                    <DimECartão dimensao={articulacao} onClick={() => interruptorRenderizacao(articulacao)}/>
                                    <DimECartão dimensao={acoes} onClick={() => interruptorRenderizacao(acoes)}/>
                                    {/* <DimECartão dimensao={frutos} /> */}




                              </main>

                              <Link href="/">
                                    <a
                                          className={styles.cartao}>Voltar</a>
                              </Link>

                        </div>


                  )}

                  {renderiza_interrogacao === 'dimensao_especifica' &&
                        (

                              <div >
                                    <Dimensao dimensao={dimensao_clicada}> </Dimensao>
                                   
                                    <button className={styles.voltar} onClick={interruptorRenderizacao}>
                                          <a>Voltar</a>
                                    </button>

                              </div>
                        )
                  }



            </div>

      )

}




export default DimensõesE