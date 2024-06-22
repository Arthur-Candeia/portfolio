'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/components/common/header.module.scss"

export function Header() {

  return (
    <header className={styles.header}>
      <Link href="/" target="_self" rel="prev" className={styles.name}>Arthur Candeia</Link>
      <nav className={styles.navDesktop}>
        <Links showServices/>
        <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external" className={styles.chat}>
          Vamos conversar {'>'}
        </Link>
      </nav>
      <BurgerMenu />
      <nav className="mobile-nav">
        <Links />
      </nav>
    </header>
  )
}

export function Links({showServices = false}: {showServices?: boolean}) {
  const pathname = usePathname()
  const links = [
    {href: '/orcamentos', name: 'Orçamentos'},
    {href: '/servicos', name: 'Serviços'},
    {href: '/recomendacoes', name: 'Recomendações'}
  ]

  function handleClose() {
    const nav = document.querySelector('.menu-burguer')
    nav!.parentElement?.querySelector('.mobile-nav')?.classList.remove('show-mobile-nav')
    nav!.classList.remove('open')
  }

  return (
    <>
      <Link href="/" target="_self" rel="prev" className={pathname === '/' ? styles.active : ''} onClick={handleClose}>
        Início
      </Link>
      {links.map(({href, name}, index) => (
        <div className={styles.linkContainer}>
          <Link
            href={href}
            key={index}
            target="_self" rel="next"
            className={`${pathname.includes(href) ? styles.active : ''}`}
            onClick={handleClose}
          >
            {name}
          </Link>
          {
            href === '/servicos' && showServices ?
            <div className={styles.servicesType}>
              <Link href="/servicos/aplicativos" target="_self" rel="next">Aplicativos</Link>
              <Link href="/servicos/criacao-de-sites" target="_self" rel="next">Criação de Sites</Link>
              <Link href="/servicos/sistemas-web" target="_self" rel="next">Sistemas Web</Link>
              <Link href="/servicos/softwares-desktop" target="_self" rel="next">Softwares Desktop</Link>
            </div>
            : ''
          }
        </div>
      ))}
    </>
  )
}

function BurgerMenu() {

  function handleClick(ev: React.MouseEvent) {
    ev.currentTarget.parentElement?.querySelector('.mobile-nav')?.classList.toggle('show-mobile-nav')
    ev.currentTarget.classList.toggle('open')
  }

  return (
    <article className="menu-burguer" onClick={handleClick}>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
    </article>
  )
}