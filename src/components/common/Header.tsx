'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/components/common/header.module.scss"

export function Header() {
  const pathname = usePathname()
  const links = [
    {href: '/orcamentos', name: 'Orçamentos'},
    {href: '/servicos', name: 'Serviços'},
    {href: '/recomendacoes', name: 'Recomendações'}
  ]

  console.log(pathname)
  return (
    <header className={styles.header}>
      <Link href="/" target="_self" rel="prev" className={styles.name}>Arthur Candeia</Link>
      <nav>
        <Link href="/" target="_self" rel="prev" className={pathname === '/' ? styles.active : ''}>Início</Link>
        {links.map(({href, name}, index) => (
          <Link
            href={href}
            key={index}
            target="_self" rel="next"
            className={pathname.includes(href) ? styles.active : ''}
          >
            {name}
          </Link>
        ))}
      <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external" className={styles.chat}>
        Vamos conversar {'>'}
      </Link>
      </nav>
    </header>
  )
}