import styles from "@/styles/components/home/cardFront.module.scss"

interface Props {
  children: React.ReactNode
  title: string
  description: string
}

export function CardFront({children, title, description}: Props) {
  return (
    <div className={`${styles.cardFront} cardFront`}>
      {children}
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}