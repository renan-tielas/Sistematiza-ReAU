import Quadrado from './Quadrado'
import styles from '../../../styles/Home.module.css'

// Represents a 10 x 18 grade of grade squares

export default function Grade(props) {

  // generates an array of 12 rows, each containing 10 GridSquares.

    const grade = []
    for (let row = 0; row < 12; row ++) {
        grade.push([])
        for (let col = 0; col < 10; col ++) {
            grade[row].push(<Quadrado key={`${col}${row}`} cor="1" />)
        }
    }

  // The components generated in makeGrid are rendered in div.grade-board

    return( 
        <div className={styles.grade}>
            {grade}
        </div>
    )
}