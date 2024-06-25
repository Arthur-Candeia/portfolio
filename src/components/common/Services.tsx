import { CardBack } from "@/components/home/CardBack";
import { CardFront } from "@/components/home/CardFront";
import { ServiceCard } from "@/components/home/ServiceCard";
import { FiSmartphone } from "react-icons/fi";
import { FaDesktop } from "react-icons/fa";
import { MdTab } from "react-icons/md";
import { PiDesktopTower } from "react-icons/pi";
import styles from "@/styles/components/common/services.module.scss";

export function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesInfos}>
        <div>
          <p>SERVIÇOS</p>
          <h2>Que tal começar o seu projeto hoje?</h2>
        </div>
        <span></span>
        <p>Transformando seus sonhos em soluções digitais perfeitas para você! Tenha suas demandas solucionadas através de um aplicativo, site ou sistema. Tudo pensado para te atender da melhor forma possível!</p>
      </div>

      <div className={styles.servicesCardsContainer}>
        <ServiceCard link="/servicos/aplicativos">
          <CardFront title="Aplicativos" description="Seu aplicativo da maneira ideal que você sempre sonhou.">
            <FiSmartphone style={{fill: 'transparent', color: '#00FF88'}} />
          </CardFront>
          <CardBack title="Aplicativos" imgUrl="/services-background/mobile.webp"/>
        </ServiceCard>

        <ServiceCard link="/servicos/criacao-de-sites">
          <CardFront title="Criação de Sites" description="Divulgue seus produtos e serviços e aumente seus ganhos.">
            <FaDesktop />
          </CardFront>
          <CardBack title="Criação de Sites" imgUrl="/services-background/site.webp"/>
        </ServiceCard>

        <ServiceCard link="/servicos/sistemas-web">
          <CardFront title="Sistemas Web" description="Sistema desenvolvido para levar sua produtividade a outro nível.">
            <MdTab />
          </CardFront>
          <CardBack title="Sistemas Web" imgUrl="/services-background/web.webp"/>
        </ServiceCard>


        <ServiceCard link="/servicos/softwares-desktop">
          <CardFront title="Softwares Desktop" description="Programa para PC desenvolvido sob medida para você.">
            <PiDesktopTower />
          </CardFront>
          <CardBack title="Softwares Desktop" imgUrl="/services-background/desktop.webp"/>
        </ServiceCard>
      </div>
    </section>
  )
}