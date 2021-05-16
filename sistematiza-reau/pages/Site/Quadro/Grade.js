import Quadrado from './Quadrado'
import styles from '../../../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { shapes } from '../Util/indice_Util'
// Represents a 10 x 18 grade of grade squares

export default function Grade(props) {
    const game = useSelector((state) => state.game)
    const { grade, shape, rotation, x, y, isRunning, speed } = game
    // generates an array of 12 rows, each containing 10 GridSquares.

    // const grade = []
    // for (let row = 0; row < 12; row ++) {
    //     grade.push([])
    //     for (let col = 0; col < 10; col ++) {
    //         grade[row].push(<Quadrado key={`${col}${row}`} cor="1" />)
    //     }
    // }

    const block = shapes[shape][rotation]
    const blockColor = shape
    // map rows
    const quadrados = grade.map((rowArray, row) => {
        // map columns  
        return rowArray.map((square, col) => {
            // Find the block x and y on the shape grid
            // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
            const blockX = col - x
            const blockY = row - y
            let cor = square
            // Map current falling block to grid.
            // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
            if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                cor = block[blockY][blockX] === 0 ? cor : blockColor
            }
            // Generate a unique key for every block
            const k = row * grade[0].length + col;
            // Generate a grid square
            console.log(grade)
            return <Quadrado
                key={k}
                cor={cor} />
        })
    })

    // ////////////////////

    //////////////
    // The components generated in makeGrid are rendered in div.grade-board

    return (
        <div className={styles.grade}>
            {quadrados}
        </div>
    )
}