import { redirect } from 'next/navigation'
import { Card } from '@/components/servicos/Card'
import { Budget } from '@/components/common/Budget'
import { serviceType } from '@/schemas/serviceType'
import Link from 'next/link'
import services from '@/../services.json'
import styles from "@/styles/servicos.module.scss"
import { serviceIcons } from '@/utilities/serviceIcons.utility'

export default function Page({params: {name}}: {params: {name: serviceType}}) {
  const service = services.find((element) => element.find_name === name)
  const icons: any[] = serviceIcons(name)
  if (!service || icons.length < 8) redirect('/')
  const {videoUrl, title, description, cards} = service
  
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