import Link from 'next/link'

import styles from '../../styles/Home.module.css'

function ListaSimples({ dimensao, elementos }) {
    return (

    <div>
        {dimensao[elementos] ? ( <div>
                {dimensao[elementos].map((elemento, i) =>
                    <div> {elemento} </div>)
                }
            </div>
        ) : null}
    </div>

    )
}


export default ListaSimples