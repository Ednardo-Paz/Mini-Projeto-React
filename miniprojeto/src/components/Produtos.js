import React from 'react'
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Produtos = () => {
  const [produtos, setprodutos] = React.useState(null);

console.log(produtos)
  React.useEffect(() => {
     fetch('https://ranekapi.origamid.dev/json/api/produto').then((resolve) => resolve.json())
     .then((json) =>  setprodutos(json))
    
  },[]);




if(produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Helmet>
        <title>TecStore</title>
        <meta name="description" content="Descrição do site TecStore" />
      </Helmet>
     {produtos.map((produto) => (
       <Link to={`produto/${produto.id}`} key={produto.id}>
         <h1 className={styles.nome}>{produto.nome}</h1>
         <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
       </Link>
     ))}
      
    </section>
  )
}

export default Produtos
