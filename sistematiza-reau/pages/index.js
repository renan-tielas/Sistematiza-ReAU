import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sistematiza ReAU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Sistematiza ReAU
        </h2>

        <p className={styles.description}>
          Processo coletivo da sistematização da experiência da ReAU
        </p>

        <div className={styles.grid}>
          
          <Link
            href="/Guia/Participar"          >
            <a className={styles.cartao}>
            <h3>Como participar &rarr;</h3>
            <p>Indicações de como se inteirar no processo, e contribuir</p>
          </a>
          </Link>
          <Link
            href="/Guia/Passo"   >
          <a className={styles.cartao}>
            <h3>Em que passo estamos &rarr;</h3>
            <p>Veja o que ja fizemos, e no que estamos focando agora</p>
          </a>

        </Link>

        <Link
            href="/Guia/Proposta"   >
          <a
            href="/"
            className={styles.cartao}
          >
            <h3>Resumo da Proposta &rarr;</h3>
            <p>Descrever a experiência da rede de maneira sistêmica e analítica: o funcionamento da ReAU.</p>
          </a></Link>

          <Link
            href="/Guia/Referencias"   >
          <a
            href="/"
            className={styles.cartao}
          >
            <h3>Referencias de Sistematização &rarr;</h3>
            <p>
            Conceitos para referência (da ANA, de Holliday - livros na pasta Referencias)
            </p>
          </a></Link>



          <Link href="/Guia/Metodologia" >

          <a
            href="/"
            className={styles.cartao}
          >


            <h3>Metodologia &rarr;</h3>
            <p>
            Metodologia deste processo de sistematização - aberta a sugestões            </p>
          </a>
          </Link>

          <Link
            href= "/Guia/Perguntas">
          <a
            href="/"
            className={styles.cartao}
          >
            <h3>Perguntas Orientadoras &rarr;</h3>
            <p>
              Perguntas que estruturam os objetivos, meios, conteudos e processo de sistematização 
              <br/><br/>
              Clicar nas perguntas leva ao item referente na sistematização.
            </p>
          </a>
          </Link>

          
          <Link
            href="/Dimensoes/DimensoesE"
            
          >
            <a
            className={styles.cartao}>
            <h1>Dimensões</h1>
            </a>
          </Link>

          {/* <Link
            href="/Site/Quadro/Quadro"
            
          >
            <a
            className={styles.cartao}>
            <h1>Quadro</h1>
            </a>
          </Link> */}


          {/* <Link
            href="/Rega/Entidades"
            
          >
            <a
            className={styles.cartao}>
            <h1>Rega</h1>
            </a>
          </Link> */}


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="www.facebook.com/rede"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rede de Agroecologia da UFRJ
        </a>
      </footer>
    </div>
  )
}


/*

FAzer um setor acima de uma cor > Entenda a sistematização

Com os cartoes introdutorios

Setor 2 > Sistematização da Experiência 
Com as dimensoes


*/