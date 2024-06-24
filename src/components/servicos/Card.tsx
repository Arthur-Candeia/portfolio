import styles from "@/styles/components/servicos/card.module.scss"

export function Card({Icon, title, description}: {Icon: any, title: string, description: string}) {
  return (
    <div className={styles.card}>
      <Icon />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}