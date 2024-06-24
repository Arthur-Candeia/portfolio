import { Budget } from "@/components/common/Budget"
import { Services } from "@/components/common/Services"
import { Grid } from "@/components/servicos/Grid"
import styles from "@/styles/servicos.module.scss"

export default function Page() {
  return (
    <main className={styles.servicos}>
      <Services />
      <section className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.title}>O que faço?</p>
          <p className={styles.content}> 
            Por meio do desenvolvimento de software, <span>realizo projetos que ultrapassem as expectativas dos clientes.</span> Seu projeto será desenvolvido com imenso zelo e habilidade, de forma a garantir <span>segurança, eficiência e qualidade</span> para os usuários. Deseja aprimorar seu negócio local com uma plataforma de vendas? Perfeito, <span>seu comércio em outro nível!</span> Deseja um sistema para sua empresa com mais de 1000 funcionários? Fantástico, a gestão de sua empresa será única!
          </p>
        </div>
      </section>
      <p className={styles.title} style={{width: '98%', marginBottom: '-20px'}}>Soluções digitais para você</p>
      <Grid />
      <Budget />
    </main>
  )
}