import { useParams } from 'react-router-dom'

import { Banner } from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderMenu from '../../components/HeaderMenu'

import List from '../../components/List'
import { useGetPratosQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: menu } = useGetPratosQuery(id!)

  if (menu) {
    return (
      <section>
        <HeaderMenu />
        <Banner title={menu.titulo} category={menu.tipo} bgImage={menu.capa} />
        <List type="menu" menu={menu.cardapio} />
        <Footer />
      </section>
    )
  }

  return <h4>Carregando...</h4>
}

export default Menu
