import { redirect } from "next/navigation"
import projects from "@/../projects.json"
import styles from "@/styles/projetos.module.scss"

export default function Page({params: {id}}: {params: {id: string}}) {
  const project = projects[+id]
  if (!project) return redirect('/')

  return (
    <main className={styles.project}>
      <h1>{project.name}</h1>
    </main>
  )
}