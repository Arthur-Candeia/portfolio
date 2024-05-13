import Link from "next/link";
import styles from "@/styles/components/common/linksContainer.module.scss";

export function LinksContainer() {
  return (
    <div className={styles.linksContainer}>
      <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external">WhatsApp</Link>
      <Link href="/orcamentos" target="_self" rel="next">Faça um orçamento</Link>
    </div>
  )
}