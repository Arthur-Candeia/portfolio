'use client'

import styles from '@/styles/orcamentos.module.scss'

export function Form() {
  return (
    <form autoComplete="on" method="POST" spellCheck={false}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id='name' className={styles.inputName} placeholder="Qual o seu nome?" required minLength={4} />
      </div>
      <div>
        <label htmlFor="tel">WhatsApp:</label>
        <input type="tel" className={styles.tel} placeholder="(XX) XXXXX-XXXX" required minLength={8} />
      </div>
      <div>
        <label htmlFor="type">Escolha o tipo de projeto:</label>
        <select id="type" className={styles.type} defaultValue="" required>
          <option value="" disabled>Selecione uma opção</option>
          <option value="app">Desenvolvimento de aplicativo (Android / IOS)</option>
          <option value="desktop">Desenvolvimento de software desktop</option>
          <option value="site">Criação de site (pessoal / produto)</option>
          <option value="spa">Construção de sistema web</option>
          <option value="sistema-gestao">Construção de sistema de gestão empresarial</option>
          <option value="backend">Desenvolvimento de servidores e API's</option>
          <option value="bot">Desenvolvimento de robôs(bot) e automações</option>
          <option value="loja">Criação de loja online / e-commerce</option>
          <option value="manutencao">Manutenção, hospedagem e/ou SEO</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Descreva seu projeto:</label>
        <textarea id='message' className={styles.message} cols={30} rows={7} placeholder="Digite aqui sua mensagem!" required minLength={4}></textarea>
      </div>
      <input type="submit" value="ENVIAR" />
    </form>
  )
}