import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import ListaEspacoFlecha from '../Componentes/ListaEspacoFlecha';
import ListaEspaco from '../Componentes/ListaEspaco';
import ListaSimples from '../Componentes/ListaSimples';
import ListaSimplisFlecha from '../Componentes/ListaSimplisFlecha';
import Pergunta from '../Componentes/Pergunta'

// Base do tipo dimensão estruturante, a ser usado por um componente cartão, 
// ou expandido na visão inteira

function DimensãoEstruturante(dimensao) {
  //  significado,propositos,componentes,elementos,exemplares,perspectivas,dinamicas,escalas,temporalidade}


  dimensao = dimensao.dimensao;
  let render_dimensao = (
    <div className={styles.dimensao}>
      <h1 className={styles.dimensao_titulo}>{dimensao.titulo}</h1>

      <div className={styles.dimensao_conteudo}>
        <h2>Significado</h2>
        {dimensao.significado}

        <h2>Propositos</h2>
        <ListaEspaco dimensao={dimensao} elementos={'propositos'}></ListaEspaco>


        

        {dimensao.perguntas&&dimensao.respostas ? (
          <div>
            <h2>Perguntas</h2>
            {dimensao.perguntas.map((object, i) => (
              <Pergunta pergunta={dimensao.perguntas[i]} resposta={dimensao.respostas[i]}> </Pergunta>
            ))}
          </div>

        ) : (dimensao.perguntas ? (
          <div>
            <h2>Perguntas</h2>
            {dimensao.perguntas.map((object, i) => (
              <Pergunta pergunta={dimensao.perguntas[i]} ></Pergunta>
            ))}
          </div>

        ) : (null))}

        <div>
          {dimensao.perspectivas_A ? (

            <div>
              <h2>Perspectivas</h2>
              <br />
              {dimensao.perspectivas_A.map((object, i) => (
                <div className={styles.dimensao_botao}> {dimensao.perspectivas_A[i]} </div>
              ))}

              <br /><br />
              <br /><br />
              {dimensao.perspectivas_A.map((object, i) => (

                <div className={styles.dimensao_botao}> {dimensao.perspectivas_B[i]} </div>

              ))}
              <br /><br />
            </div>


          ) : null}



          <div>
            {dimensao.escalas ? (
              <div>
                <h2>Escalas</h2>


                <div>
                  {dimensao.escalas.map((object, i) => (
                    <div className={styles.dimensao_botao}> {dimensao.escalas[i]} </div>
                  ))}
                </div>
                <div>

                  <br />

                  <div className={styles.dimensao_botao}> {dimensao.escalas[0]} </div>
                  <div className={styles.dimensao_botao}> {dimensao.escalas[1]} </div>
                  <div className={styles.dimensao_botao}> {dimensao.escalas[2]} </div>
                  <div className={styles.dimensao_botao}> {dimensao.escalas[3]} </div>
                  <div className={styles.dimensao_botao}> {dimensao.escalas[4]} </div>
                  <br /><br /><br /><br />
                  <div className={styles.dimensao_botao}> {dimensao.escalas[5]} </div>
                  <br /><br />
                </div>


              </div>
            ) : null}
          </div>
        </div>
        <h2>Componentes</h2>
        <ListaSimplisFlecha dimensao={dimensao} elementos={'componentes'}></ListaSimplisFlecha>
        <h2>Elementos</h2>
        <ListaSimplisFlecha dimensao={dimensao} elementos={'elementos'}></ListaSimplisFlecha>
        <div>
          {dimensao.exemplares ? (
            <div>
              <h2>Exemplares</h2>
              <div> {dimensao.exemplares} </div></div>
          ) : null}
        </div>






        <div>
          {dimensao.dinamicas ? (
            <div>              <h2>Dinâmicas</h2>

              <ListaEspacoFlecha dimensao={dimensao} elementos={'dinamicas'}></ListaEspacoFlecha>
            </div>
          ) : null}
        </div>

        <div>
          {dimensao.temporalidade ? (
            <div>
              <h2>Temporalidade</h2>
              <div> {dimensao.temporalidade} </div></div>
          ) : null}
        </div>
      </div>

    </div>

  )



  return render_dimensao
}


export default DimensãoEstruturante

