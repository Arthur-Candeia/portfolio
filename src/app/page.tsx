import { LinksContainer } from "@/components/common/LinksContainer";
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
          <Image src="/photo.webp" alt="Minha foto" className={styles.profilePicture} width={500} height={500}/>
      </section>
    </main>
  );
}
