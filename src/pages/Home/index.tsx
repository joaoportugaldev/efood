import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'
import { Loader } from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

export interface Dish {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <List defaultList={true} restaurants={restaurants} />
      )}
      <Footer />
    </>
  )
}

export default Home
