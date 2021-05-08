 import Link from 'next/link'
 
 import styles from '../../styles/Home.module.css'
 function DimensãoEstruturante_Cartao({dimensao, ...buttonProps}) {





    // [significado,propositos,dinamica,temporalidade]
return <button className={styles.cartao_dim}  {...buttonProps}>
{/* // onClick={this.props.customClickEvent} */}
    <div >


      <div className={styles.titulo}>{dimensao.titulo}</div>

      {/* <h2>Significado</h2> */}
      <br/>
      {dimensao.significado}
      {/* <h2>Perguntas</h2>
      {dimensao.perguntas} */}
      {/* <h2>Propositos</h2>
      {dimensao.propositos}

      <h2>Componentes</h2>
      {dimensao.componentes} */}
      </div>
  
</button>
}
   
  

export default DimensãoEstruturante_Cartao



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

  //     {for (let atributo of Object.keys(dimensao)) {
  //     //  <div>{alert(value) } </div>k
  //     <h2>Significado</h2>
  //     // {dimensao.significado}
  // }}
