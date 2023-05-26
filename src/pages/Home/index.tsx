import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'

import { useGetRestaurantesQuery } from '../../services/api'

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
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

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
