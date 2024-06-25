import { FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/components/common/wppIcon.module.scss"
import Image from "next/image";

export function WppIcon() {
  return (
    <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external" className={styles.wppIcon}>
      <Image src={"/wpp.webp"} alt="WhatsApp Icon" width={100} height={100}/>
    </Link>
  )
}