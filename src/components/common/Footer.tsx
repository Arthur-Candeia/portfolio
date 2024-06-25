import { Links } from "./Header";
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import styles from "@/styles/components/common/footer.module.scss"

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h2>Arthur Candeia</h2>
          <p>Desenvolvimento que soluciona suas demandas digitais.</p>
          <div className={styles.social}>
            <Link href="https://www.instagram.com/arthur_candeia/" target="_blank" rel="external">
              <FaInstagram />
            </Link>
            <Link href="https://github.com/Arthur-Candeia/" target="_blank" rel="external">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/arthur-candeia/" target="_blank" rel="external">
              <FaLinkedinIn />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className={styles.links}>
          <h3>Links</h3>
          <div>
            <Links />
          </div>
        </div>
        <div className={styles.footerContacts}>
          <h3>Contate-me</h3>
          <aside>
            <div>
              <MdOutlineMailOutline />
              <p>arthurheher@hotmail.com</p>
            </div>
            <div>
              <BsTelephone />
              <p>(27) 99864-2163</p>
            </div>
          </aside>
        </div>
      </footer>
      <p className={styles.rights}>Arthur Candeia © 2024. Todos os direitos reservados.</p>
    </>
  )
}