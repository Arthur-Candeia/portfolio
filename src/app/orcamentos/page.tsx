import { Form } from '@/components/orcamentos/Form'
import styles from '@/styles/orcamentos.module.scss'

export default function Page() {
  return (
    <main className={styles.orcamentos}>
      <h1>Precisando de um <span>aplicativo</span> ou<br /><span>sistema/site?</span></h1>
      <p className={styles.description}>Envie o pedido de um orçamento gratuitamente. Receba o contato com todas as informações para transformar o seu sonho em realidade.</p>
      <Form />
    </main>
  )
}