import projects from "@/../projects.json"
import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/components/home/projects.module.scss"

export function Projects() {
  return (
    <aside className={styles.projects}>
      {projects.map((element, index) => (
        <div key={index} className={styles.projectContainer}>
          <div className={styles.imageContainer}>
            <Image src={element.photos[0]} alt={`Imagem projeto ${element.name}`} width={400} height={180} />
          </div>
          <div className={styles.infosContainer}>
            <p className={styles.title}>{element.name}</p>
          </div>
          <div className={styles.linksContainer}>
            <Link href={`/projetos/${element.find_id}`} target="_self" rel="next">Saiba mais</Link>
            <Link href={`${element["link-external"]}`} target="_blank" rel="external">Visite 🔗</Link>
          </div>
        </div>
      ))}
    </aside>
  )
}