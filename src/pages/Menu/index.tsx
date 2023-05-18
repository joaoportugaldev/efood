import { Banner } from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderMenu from '../../components/HeaderMenu'
import image1 from '../../assets/images/imagem.png'
import Dish from '../../models/Dish'
import marguerita from '../../assets/images/marguerita.png'
import List from '../../components/List'

const menu: Dish[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 2,
    title: 'Pizza 4 Queijos',
    description:
      'A clássica 4 Queijos: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 3,
    title: 'Pizza Mamma Quaresma',
    description:
      'A clássica Mamma Quaresma: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  }
]

const Menu = () => (
  <section>
    <HeaderMenu />
    <Banner
      title="La Dolce Vita Trattoria"
      category="Italiana"
      bgImage={image1}
    />
    <List type="menu" menu={menu} />
    <Footer />
  </section>
)

export default Menu
