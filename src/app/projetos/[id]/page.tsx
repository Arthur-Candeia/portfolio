'use client'

import { redirect } from "next/navigation"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import projects from "@/../projects.json"
import styles from "@/styles/projetos.module.scss"
import 'swiper/css'


export default function Page({params: {id}}: {params: {id: string}}) {
  const project = projects[+id]
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
              <Image src={element} className={styles.photo} alt='Aspas icon' width={1920} height={1080} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.description}>{description}</p>
          <p>Desenvolvido em {created_at}</p>
        </div>
      </section>

      <section>
        <h2>Mais informações</h2>
        {Object.keys(infos).map((element) => (
          <div>
            <h3>{element}</h3>
            {Object.entries(infos[element as keyof typeof infos]).map(([key, value], index) => (
              <ul key={index + 'list'}>
                <li>{key} - {value}</li>
              </ul>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}