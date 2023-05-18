import Header from '../../components/Header'
import List from '../../components/List'
import image1 from '../../assets/images/imagem.png'
import image2 from '../../assets/images/image2.png'
import Restaurant from '../../models/Restaurant'
import Footer from '../../components/Footer'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: image1,
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque do Dia', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: image2,
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <List type="restaurant" restaurants={restaurantes} />
    <Footer />
  </>
)

export default Home
