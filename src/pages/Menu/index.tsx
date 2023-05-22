import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Prato, Restaurante } from '../Home'
import { Banner } from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderMenu from '../../components/HeaderMenu'

import List from '../../components/List'

const Menu = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <section>
      <HeaderMenu />
      <Banner title={menu.titulo} category={menu.tipo} bgImage={menu.capa} />
      <List type="menu" menu={menu.cardapio} />
      <Footer />
    </section>
  )
}

export default Menu
