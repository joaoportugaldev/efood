import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <List type="restaurant" restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
