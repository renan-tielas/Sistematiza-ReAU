import Link from 'next/link'
import Dimensão from './DimensaoEstruturante'
import DimECartão from './DimensaoEstruturante_Cartao'
import styles from '../../styles/Home.module.css'
 
function DimensõesE() {

return (
<div className={styles.dimensoes}>
    
        <h1 className={styles.title}>
         Dimensões da Experiência da ReAU
        </h1>
        <main className={styles.quadro}>
   <DimECartão
   titulo = "Estrutura"
   significado = " Elementos que embasam todo o funcionamento"
    propositos = " A dimensão física da ReAU, de onde emergem as demais dimensões"  
    componentes= " nós e elos">
    </DimECartão>

    <DimECartão
   significado = " afasdfs"
    propositos = " ndfgfgnfdhertebebdb" 
    componentes = " 12313" >
    
    </DimECartão>

    <DimECartão
   significado = " bllla"
    propositos = " asdasd"  >
    
    </DimECartão>
    </main>

       <Link href="/">
         <a
         className={styles.card}>Voltar</a>
       </Link>
     
</div>)
}
  
 
// let significado, propositos; 
// let componentes, elementos= [];
// let exemplares = [];


// let dimensao = {
//     significado,
//     propositos,
//     componentes,
//     elementos,
//     exemplares,

// }


export default DimensõesE