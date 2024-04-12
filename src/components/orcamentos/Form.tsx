'use client'

import { FormEvent, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '@/styles/orcamentos.module.scss'

export function Form() {
  const nameRef = useRef<HTMLInputElement>(null)
  const telRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const submitRef = useRef<HTMLInputElement>(null)

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    const params = {
      from_name: nameRef.current!.value,
      tel: telRef.current!.value,
      type: typeRef.current!.value,
      message: messageRef.current!.value
    }

    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, params as any, process.env.NEXT_PUBLIC_KEY!)
    const inputSubmit = submitRef.current!
    inputSubmit.value = 'Orçamento Enviado!'
    inputSubmit.style.color = 'white'
    inputSubmit.style.backgroundColor = 'transparent'
    inputSubmit.style.outlineColor = '#00ff88'
  }

  return (
    <form autoComplete="on" method="POST" spellCheck={false} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id='name' className={styles.inputName} placeholder="Qual o seu nome?" required minLength={4} ref={nameRef}/>
      </div>
      <div>
        <label htmlFor="tel">WhatsApp:</label>
        <input type="tel" className={styles.tel} placeholder="(XX) XXXXX-XXXX" required minLength={8} ref={telRef} />
      </div>
      <div>
        <label htmlFor="type">Escolha o tipo de projeto:</label>
        <select id="type" className={styles.type} defaultValue="" required ref={typeRef}>
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
        <textarea id='message' className={styles.message} cols={30} rows={7} placeholder="Digite aqui sua mensagem!" required minLength={4} ref={messageRef}></textarea>
      </div>
      <input type="submit" value="ENVIAR" ref={submitRef} />
    </form>
  )
}