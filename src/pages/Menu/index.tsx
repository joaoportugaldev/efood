import { useParams } from 'react-router-dom'

import { Banner } from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderMenu from '../../components/HeaderMenu'
import List from '../../components/List'

import { useGetDishesQuery } from '../../services/api'
import { Loader } from '../../components/Loader'

type DishParams = {
  id: string
}

const Menu = () => {
  const { id } = useParams() as DishParams

  const { data: menu, isLoading } = useGetDishesQuery(id)

  return (
    <section>
      <HeaderMenu />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {menu && (
            <>
              <Banner
                title={menu.titulo}
                category={menu.tipo}
                bgImage={menu.capa}
              />
              <List defaultList={false} menu={menu.cardapio} />
            </>
          )}
        </>
      )}
      <Footer />
    </section>
  )
}

export default Menu
