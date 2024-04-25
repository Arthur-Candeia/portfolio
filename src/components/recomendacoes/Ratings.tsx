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
      className={styles.ratings}
      lazyPreloadPrevNext={0}
      spaceBetween={150}
      autoplay={{delay: 5000, disableOnInteraction: false}}
      modules={[Autoplay]}
      loop
    >
      {allRatings.map((element, index) => (
        <SwiperSlide key={index}>
          <Image src="/marks.png" alt='Aspas icon' width={100} height={85}></Image>
          <p>{element.comment}</p>
          <img src={element.img ?? '/user-icon.png'} alt="Foto do cliente" />
          <div>{element.name}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}