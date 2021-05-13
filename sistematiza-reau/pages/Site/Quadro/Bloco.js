
import Quadrado from './Quadrado'
import styles from '../../../styles/Home.module.css'
// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {

    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <Quadrado key={`${row}${col}`} color={square} />
        })
    })

    return (
        <div className={styles.bloco}>
            {grid}
        </div>
    )
}