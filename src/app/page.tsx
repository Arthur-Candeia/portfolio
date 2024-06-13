import { LinksContainer } from "@/components/common/LinksContainer";
import { CardBack } from "@/components/home/CardBack";
import { CardFront } from "@/components/home/CardFront";
import { ServiceCard } from "@/components/home/ServiceCard";
import { FiSmartphone } from "react-icons/fi";
import { FaDesktop } from "react-icons/fa";
import { MdTab } from "react-icons/md";
import { PiDesktopTower } from "react-icons/pi";
import Image from "next/image";
import styles from "@/styles/home.module.scss"

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
            <CardFront title="Aplicativos" description="Seu aplicativo da maneira ideal que você sempre sonhou.">
              <FiSmartphone style={{fill: 'transparent', color: '#00FF88'}} />
            </CardFront>
            <CardBack title="Aplicativos" imgUrl="" link=""/>
          </ServiceCard>

          <ServiceCard>
            <CardFront title="Criação de Sites" description="Divulgue seus produtos e serviços e aumente seus ganhos.">
              <FaDesktop />
            </CardFront>
            <CardBack title="Criação de Sites" imgUrl="" link=""/>
          </ServiceCard>

          <ServiceCard>
            <CardFront title="Sistemas Web" description="Sistema desenvolvido para levar sua produtividade a outro nível.">
              <MdTab />
            </CardFront>
            <CardBack title="Sistemas Web" imgUrl="" link=""/>
          </ServiceCard>


          <ServiceCard>
            <CardFront title="Softwares Desktop" description="Programa para PC desenvolvido sob medida para você.">
              <PiDesktopTower />
            </CardFront>
            <CardBack title="Softwares Desktop" imgUrl="" link=""/>
          </ServiceCard>
        </div>
      </section>
    </main>
  );
}
