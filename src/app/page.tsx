import { LinksContainer } from "@/components/common/LinksContainer";
import { CardBack } from "@/components/home/CardBack";
import { CardFront } from "@/components/home/CardFront";
import { ServiceCard } from "@/components/home/ServiceCard";
import { ImMobile } from "react-icons/im";
import styles from "@/styles/home.module.scss"
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.start}>
        <div className={styles.header} data-aos="fade-up" data-aos-duration="1000">
          <h1><span>Soluções</span> digitais<br /><span>Sonhos</span> em realidade</h1>
          <div>
            <p>Não deixe sua ideia apenas no papel, faça seu aplicativo ganhar vida da maneira que sempre sonhou! Você merece o melhor!</p>
            <LinksContainer />
          </div>
        </div>
        <Image src="/photo.webp" alt="Minha foto" className={styles.profilePicture} width={500} height={500} />
      </section>

      <section className={styles.services}>
        <div className={styles.servicesInfos}>
          <div>
            <p>SERVIÇOS</p>
            <h2>Que tal começar o seu projeto hoje?</h2>
          </div>
          <span></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos nam corporis omnis quisquam! Accusamus, repudiandae dicta. Mollitia, enim voluptatibtiis eveniet vero?</p>
        </div>

        <div className={styles.servicesCardsContainer}>
          <ServiceCard>
            <CardFront title="Aplicativos" description="Seu aplicativo da maneira que você sempre sonhou.">
              <ImMobile />
            </CardFront>

            <CardBack title="Aplicativos" imgUrl="" link=""/>
          </ServiceCard>
        </div>
      </section>
    </main>
  );
}
