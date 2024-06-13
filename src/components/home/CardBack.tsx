import styles from "@/styles/components/home/cardBack.module.scss"

interface Props {
  title: string
  imgUrl: string
}

export function CardBack({title, imgUrl}: Props) {
  return (
    <div className={`${styles.cardBack} cardBack`} style={{background: `#00ff88 url("${imgUrl}") center center no-repeat scroll`, backgroundSize: 'cover'}}>
      <p className={styles.title}>{title}</p>
      <button>Saiba Mais</button>
    </div>
  )
}