import styles from "@/styles/components/home/cardBack.module.scss"

interface Props {
  title: string
  link: string
  imgUrl: string
}

export function CardBack({title}: Props) {
  return (
    <div className={`${styles.cardBack} cardBack`}>
      <p>{title}</p>
    </div>
  )
}