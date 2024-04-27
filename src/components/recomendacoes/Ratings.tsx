'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import allRatings from "@/../ratings.json"
import styles from "@/styles/recomendacoes.module.scss"
import Image from 'next/image'
import 'swiper/css'

export function Ratings() {
  return (
    <Swiper
      className={styles.ratingsSlide}
      lazyPreloadPrevNext={0}
      spaceBetween={150}
      autoplay={{delay: 5000, disableOnInteraction: false}}
      modules={[Autoplay]}
      loop
    >
      {allRatings.map((element, index) => (
        <SwiperSlide key={index} className={styles.rating}>
          <Image src="/marks.png" className={styles.marks} alt='Aspas icon' width={75} height={64}></Image>
          <p>{element.comment}</p>
          <div>
            <img src={element.img ?? '/user-icon.png'} className={styles.photo} alt="Foto do cliente" />
            <p>{element.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}