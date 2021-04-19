 import Link from 'next/link'
 
 
 function DimensãoEstruturante({significado,propositos,componentes,elementos,exemplares}) {
    // [significado,propositos,dinamica,temporalidade]
return <div>
    
      <h2>Significado</h2>
      {significado}

      <h2>Propositos</h2>
      {propositos}

      <h2>Componentes</h2>
      {componentes}
      
      <h2>Elementos</h2>
      {elementos}

      <h2>Exemplares</h2>
      {exemplares}

</div>
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


export default DimensãoEstruturante