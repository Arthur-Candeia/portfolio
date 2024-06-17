import styles from "@/styles/components/common/budget.module.scss"
import Link from "next/link"

export function Budget() {
  return (
    <section className={styles.budget}>
      <video preload="none" autoPlay muted loop>
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div>
        <p className={styles.budgetTitle}>Quero um orçamento</p>
        <p className={styles.budgetDescription}>Desenvolvimento que soluciona suas demandas digitais.</p>
        <Link href="/orcamentos" target="_self" rel="next">Quero um orçamento</Link>
      </div>
    </section>
  )
}