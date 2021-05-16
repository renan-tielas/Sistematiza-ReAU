
import Quadrado from './Quadrado'
import styles from '../../../styles/Home.module.css'
import { useSelector } from 'react-redux'
import {shapes} from'../Util/indice_Util'
// Draws the "next" block view showing the next block to drop
export default function Bloco(props) {
    const nextShape = useSelector((state) => state.game.nextShape)
    const bloco = shapes[nextShape][1] // Get the first rotation

    // Map the block to the grid
    const grid = bloco.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <Quadrado key={`${row}${col}`} cor={square} />
        })
    })

    return (
        <div className={styles.bloco}>
            {grid}
        </div>
    )
}