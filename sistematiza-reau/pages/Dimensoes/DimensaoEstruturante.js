import Link from 'next/link'

// Base do tipo dimensão estruturante, a ser usado por um componente cartão, 
// ou expandido na visão inteira

function DimensãoEstruturante({ dimensao }) {
      //  significado,propositos,componentes,elementos,exemplares,perspectivas,dinamicas,escalas,temporalidade}

      let dimensao_estruturante = {
            titulo: '',
            significado: '',
            propositos: '',
            componentes: '',
            elementos: '',
            // exemplares: '',
            // perspectivas: '',
            // escalas: '',
            // dinamicas: '',
            // desafios: '',
            // indicadores: '',
            // temporalidade: '',
      }

      switch (dimensao) {
            case 'estrutura': (
                  dimensao_estruturante = {
                        titulo: "Estrutura",
                        significado: " Elementos que embasam todo o funcionamento",
                        propositos: " A dimensão física da ReAU, de onde emergem as demais dimensões",
                        componentes: "Os Nós e os Elos",
                        // elementos: "",
                        // exemplares: "",
                        // perspectivas: "",
                        // escalas: "",
                        // dinamicas: "",
                        // desafios: "",
                        indicadores: "Interdependência entre os projetos; ...",
                        // temporalidade: ""
                  })
                  break;
            case 'comunicacao': (
                  dimensao_estruturante = {
                        titulo: "Comunicação",
                        significado: "Detalha as relações/elos de comunicação entre os nós",
                        propositos: " não preenchido",
                        // componentes: "",
                        // elementos: "",
                        // exemplares: "",
                        perspectivas: "Comunicação Interna; Comunicação Externa",
                        // escalas: " ",
                        dinamicas: "Como acontece a comunicação? Que efeitos os meios de comunicação escolhidos tem?    ",
                        desafios: "",
                        indicadores: "O que esperamos da comunicação? O que queremos comunicar? Está sendo efetivo?",
                        temporalidade: ""
                  })
                  break;
            case 'articulacao': (
                  dimensao_estruturante = {
                        titulo: "Articulação",
                        significado: "Aquilo que fica da comunicação, as idéias, os combinados, os grupos de trabalho, os mutirões, as representações, as articulações em redes, os espaços de consulta, os fórums",
                        propositos: " não preenchido",
                        componentes: "",
                        elementos: "",
                        exemplares: "",
                        perspectivas: "Articulação Interna; Articulação Externa",
                        escalas: " UFRJ, Fundão, Entorno do Fundão, RJ ",
                        dinamicas: " Busca da Autogestão ",
                        indicadores: "",
                        temporalidade: "",
                  })
                  break;

            default:
                  break; }
      
    

// let exemplares = 




let render_dimensao=(
      <div>
      <h1>{dimensao_estruturante.titulo}</h1>

           
      <h2>Significado</h2>
      {dimensao_estruturante.significado}

      <h2>Propositos</h2>
      {dimensao_estruturante.propositos}

      <h2>Componentes</h2>
      {dimensao_estruturante.componentes}

      <h2>Elementos</h2>
      {dimensao_estruturante.elementos}
      
      
      <div>
      {dimensao_estruturante.exemplares ? (
        <div>
        <h2>Exemplares</h2> 
        <div> {dimensao_estruturante.exemplares } </div></div>    
      ): null }
      </div>


      <div>
      {dimensao_estruturante.perspectivas ? (
        <div>
        <h2>Perspectivas</h2> 
        <div> {dimensao_estruturante.perspectivas } </div></div>    
      ): null }
      </div>

      <div>
      {dimensao_estruturante.escalas ? (
        <div>
        <h2>Escalas</h2> 
        <div> {dimensao_estruturante.escalas } </div></div>    
      ): null }
      </div>

      <div>
      {dimensao_estruturante.dinamicas ? (
        <div>
        <h2>Dinamicas</h2> 
        <div> {dimensao_estruturante.dinamicas } </div></div>    
      ): null }
      </div>

      <div>
      {dimensao_estruturante.temporalidade ? (
        <div>
        <h2>Temporalidade</h2> 
        <div> {dimensao_estruturante.temporalidade } </div></div>    
      ): null }
      </div>

      </div>
      
      )

       
 
      return render_dimensao
}


export default DimensãoEstruturante