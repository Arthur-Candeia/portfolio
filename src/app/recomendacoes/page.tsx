import { Ratings } from '@/components/recomendacoes/Ratings'
import styles from '@/styles/recomendacoes.module.scss'

export default function Page() {
  return (
    <main className={styles.recomendacoes}>
      <section className={styles.ratings}>
        <div>

        </div>
        <div className={styles.notebook}>
          <Ratings />
        </div>
      </section>
    </main>
  )
}