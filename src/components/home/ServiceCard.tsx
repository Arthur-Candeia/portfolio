import styles from "@/styles/components/home/serviceCard.module.scss"

export function ServiceCard({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.serviceCard}>
      {children}
    </div>
  )
}