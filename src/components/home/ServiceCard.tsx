import styles from "@/styles/components/home/serviceCard.module.scss"
import Link from "next/link"

export function ServiceCard({children, link}: {children: React.ReactNode, link: string}) {
  return (
    <Link href={link} target="_self" rel="next" className={styles.serviceCard}>
      {children}
    </Link>
  )
}