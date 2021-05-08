
import Link from 'next/link'

import styles from '../../styles/Home.module.css'

function ListaEspaco({ dimensao, elementos }) {
  return (
    <div>
      {dimensao[elementos] ? (
        <div>
          {dimensao[elementos].map((elemento, i) =>
            <div>{elemento}<br /><br /> </div>)
          }
        </div>
      ) : null}
    </div>


  )
}


export default ListaEspaco