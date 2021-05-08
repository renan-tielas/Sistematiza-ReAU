
import Link from 'next/link'

import styles from '../../styles/Home.module.css'

function ListaSimplisFlecha({ dimensao, elementos }) {
  return (
    <div>
         {dimensao[elementos] ? ( <div>
          {dimensao[elementos].map((elemento, i) =>
        <div> &rarr; {elemento} </div>)
      }
            </div>
        ) : null}
     
    </div>

  )
}


export default ListaSimplisFlecha