import styles from "@/styles/components/common/skeletons.module.scss"

export function SkeletonDefault({reverse = false}: {reverse?: boolean}) {
  return (
    <main className={!reverse ? styles.skeleton : styles.skeletonReverse}>
      <section>
      <div>

      </div>
      <div>

      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      </section>

      <section>

      </section>
    </main>
  )
}

export function SkeletonService() {
  return (
    <main className={styles.skeletonService}>
      <section></section>
      <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  )
}

export function SkeletonBudget() {
  return (
    <main className={styles.skeletonBudget}>
      <section></section>
      <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  )
}