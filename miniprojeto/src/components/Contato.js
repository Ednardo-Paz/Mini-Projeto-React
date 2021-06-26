import React from 'react'
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'
import { Helmet } from 'react-helmet';




const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Helmet>
        <title>TecStore | Conatato</title>
        <meta name="description" content="Entre em contato"/>
      </Helmet>
      <img src={foto} alt="Maquina de escrever" />
      <div>
      <h1>Entre em contato.</h1>
      <ul className={styles.dados}>
        <li>eds_paz@hotmail.com</li>
        <li>(79) 99991-5161</li>
        <li>Rua Depois da esquina, 563</li>
      </ul>
      </div>
    </div>
  )
}

export default Contato
