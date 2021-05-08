
import Link from 'next/link'

import styles from '../../styles/Home.module.css'

function ListaEspacoFlecha({dimensao,elementos}) {
    return (
<div>
            {dimensao[elementos].map((elemento, i) =>
              <div> &rarr; {elemento}<br/><br/> </div>)
            }
          </div>

    )
     }


     export default ListaEspacoFlecha