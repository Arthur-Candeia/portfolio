import { FiMonitor } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { TfiPencil } from "react-icons/tfi";
import { TbCloudUp } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import styles from "@/styles/components/servicos/grid.module.scss"

export function Grid() {
  return (
    <ul className={styles.gridContainer}>
      <li>
        <div><FiMonitor /></div>
        <p><span>Serviços</span> <br />Desenvolvedor de softwares, aplicativos, sistemas web (SPA), API's, interfaces e sites.</p>
      </li>
      <li>
        <div><AiOutlineMobile /></div>
        <p><span>Mobile</span> <br />Aplicativos rápidos e seguros para android e IOS de acordo com sua necessidade.</p>
      </li>
      <li>
        <div><GoDatabase /></div>
        <p><span>Back-end</span> <br />Servidor desenvolvido com estrutura escalável e robusta para sua aplicação.</p>
      </li>
      <li>
        <div><TfiPencil /></div>
        <p><span>Front-end</span> <br />Transformando ideias em experiências incríveis e únicas para seus usuários.</p>
      </li>
      <li>
        <div><TbCloudUp /></div>
        <p><span>Hospedagem</span> <br />Hospedagens excelentes para garantir segurança e desempenho à sua aplicação.</p>
      </li>
      <li>
        <div><IoDiamondOutline /></div>
        <p><span>Otimização</span> <br />Sua aplicação otimizada para garantir experiências únicas para os usuários. </p>
      </li>
    </ul>
  )
}