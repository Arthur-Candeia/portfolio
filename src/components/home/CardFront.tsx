import styles from "@/styles/components/home/cardFront.module.scss"

interface Props {
  children: React.ReactNode
  title: string
  description: string
}

export function CardFront({children, title, description}: Props) {
  return (
    <div className={`${styles.cardFront} cardFront`}>
      <div className={styles.titleContainer}>
        {children}
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}