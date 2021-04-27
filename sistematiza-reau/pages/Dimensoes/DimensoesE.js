import Link from 'next/link'
import Dimensao from './DimensaoEstruturante'
import DimECartão from './DimensaoEstruturante_Cartao'
import styles from '../../styles/Home.module.css'
 
function DimensõesE() {


// arquivo com instancias das dimensoes estruturantes 
// a serem renderizadas por outros componentes


return (
<div className={styles.dimensoes}>
    
        <h1 className={styles.title}>
         Dimensões da Experiência da ReAU
        </h1>
        <main className={styles.quadro}>
         {/* <Dimensao dimensao="estrutura"></Dimensao>
        <Dimensao dimensao="comunicacao"></Dimensao> */}
        <Dimensao dimensao="articulacao"></Dimensao>
       
   <DimECartão
   
    >

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