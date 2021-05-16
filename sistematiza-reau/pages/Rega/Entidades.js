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



      const Rede_1 = {
            nome: "Exemplo de Rede",
            // perguntas: ['Como podemos entender a estrutura interna da reau?',
            // 'O que queremos facilitar através dessa estrutura?'],
            objetivos: " Elementos que embasam todo o funcionamento",
            ações: [],
            propostas: ['A dimensão física da ReAU, de onde emergem as demais dimensões'],
            // componentes: ['Vivos', 'Físicos', 'Virtuais'],
            // elementos: ['Pessoas', 'Coletivos', 'Parceiros', 'Espaços (Agroecológicos, de Convívio)','Instituições', 'Redes Virtuais'],
            // // exemplares: "",
            // perspectivas: ['Interna','Externa'],
            // // escalas: "",
            // // dinamicas: "",
            // // desafios: "",
            // indicadores: ['Interdependência entre os projetos?','A estrutura propicia a autogestão?'],
            // temporalidade: ""
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