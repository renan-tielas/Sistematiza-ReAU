import styles from '../../../styles/Home.module.css'

 function Quadrado(props) {
     const cor = `cor_${props.cor}`
    const classes = `${styles.quadrado} ${styles[cor]}`
    return <div className={classes} />
  }
  
  export default Quadrado;