import { Ratings } from '@/components/recomendacoes/Ratings'
import styles from '@/styles/recomendacoes.module.scss'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.recomendacoes}>
      <section className={styles.ratings}>
        <div className={styles.header} data-aos="fade-up" data-aos-duration="1000">
          <h1><span>Excelentes</span> avaliações<br /><span>Contrate</span> agora</h1>
          <div>
            <p>Por meio do desenvolvimento de software realizo projetos que ultrapassem suas expectativas. Solicite um orçamento e tire o seu projeto do papel, você merece o melhor! Sua satisfação é importante, junte-se àqueles que tiveram suas demandas digitais solucionadas.</p>
            <div className={styles.linksContainer}>
              <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external">WhatsApp</Link>
              <Link href="/orcamentos" target="_self" rel="next">Faça um orçamento</Link>
            </div>
          </div>
        </div>
        <div className={styles.notebook} data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000">
          <Ratings />
        </div>
      </section>
    </main>
  )
}