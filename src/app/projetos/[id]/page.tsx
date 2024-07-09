'use client'

import { redirect } from "next/navigation"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Budget } from "@/components/common/Budget"
import Image from 'next/image'
import Link from "next/link"
import projects from "@/../projects.json"
import styles from "@/styles/projetos.module.scss"
import 'swiper/css'


export default function Page({params: {id}}: {params: {id: string}}) {
  const project = projects.find((element) => element.find_id === id)
  if (!project) return redirect('/')
  const { photos, name, description, infos, created_at } = project

  return (
    <main className={styles.project}>
      <section className={styles.contentContainer}>
        <Swiper
          className={styles.photosSlide}
          lazyPreloadPrevNext={0}
          spaceBetween={150}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          modules={[Autoplay]}
          loop
        >
          {photos.map((element, index) => (
            <SwiperSlide key={index} className={styles.photoContainer}>
              <Image src={element} className={styles.photo} alt='Photo' width={1920} height={1080} quality={100} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>{description}</p>
          <p>Entregue em {created_at}</p>
          <Link href={`${project["link-external"]}`} target="_blank" rel="external">Visite 🔗</Link>
        </div>
      </section>

      <Budget />

      <section className={styles.infosSection}>
        <h2>Mais informações sobre o projeto</h2>
        <div className={styles.infosContainer}>
          {Object.keys(infos).map((element) => (
            <div className={styles.infos}>
              <h3>{element}</h3>
              {Object.entries(infos[element as keyof typeof infos]).map(([key, value], index) => (
                <ul key={index + 'list'}>
                  <li>{key} - {value}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}