import { Suspense } from "react"
import Link from "next/link"
import styles from "@/styles/components/common/budget.module.scss"

export function Budget() {
  return (
    <section className={styles.budget}>
      <Suspense fallback={<p>Loading video...</p>}>
        <video preload="none" autoPlay muted loop>
          <source src="/videos/budget.mp4" type="video/mp4" />
        </video>
      </Suspense>
      <div>
        <p className={styles.budgetTitle}>Quero um orçamento</p>
        <p className={styles.budgetDescription}>Desenvolvimento que soluciona suas demandas digitais.</p>
        <Link href="/orcamentos" target="_self" rel="next">Quero um orçamento</Link>
      </div>
    </section>
  )
}