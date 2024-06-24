import { redirect } from 'next/navigation'
import { Card } from '@/components/servicos/Card'
import { Budget } from '@/components/common/Budget'
import Link from 'next/link'
import services from '@/../services.json'
import styles from "@/styles/servicos.module.scss"


type nameType = 'aplicativos' | 'criacao-de-sites' | 'sistemas-web' | 'softwares-desktop'

export default function Page({params: {name}}: {params: {name: nameType}}) {
  const service = services.find((element) => element.find_name === name)
  if (!service) redirect('/')
  const {videoUrl, title, description, cards} = service
  const icons: any[] = []

  switch (name) {
    case 'aplicativos':
      const {FiSmartphone, FiCamera} = require('react-icons/fi')
      const {MdOutlineNotificationsActive} = require('react-icons/md')
      const {FaRegCreditCard} = require('react-icons/fa')
      const { RiMapPinLine, RiAdminLine } =  require("react-icons/ri");
      const {BsChatLeftDots} = require('react-icons/bs')
      const {TbCloudUp} = require('react-icons/tb')


      icons.push(FiSmartphone, MdOutlineNotificationsActive, FaRegCreditCard, RiMapPinLine, RiAdminLine, BsChatLeftDots, TbCloudUp, FiCamera)
    break
    case 'criacao-de-sites':
    break
    case 'sistemas-web':
    break
    case 'softwares-desktop':
    break
  }

  return (
    <main className={styles.service}>
      <section className={styles.videoContainer}>
        <video preload="none" autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div>
          <p className={styles.serviceTitle}>{title}</p>
          <p className={styles.serviceDescription}>{description}</p>
          <Link href="https://api.whatsapp.com/send?phone=5527998642163&text=Olá!%20Tenho%20um%20projeto!" target="_blank" rel="external">Contratar agora</Link>
        </div>
      </section>

      <section className={styles.cardContainer}>
        {cards.map(({title, description}, index) => (
          <Card Icon={icons[index]} key={index} title={title} description={description} />
        ))}
      </section>

      <Budget />
    </main>
  )
}