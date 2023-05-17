import { Product } from '../Product'
import { List, SectionContainer } from './styles'
import cardBg from '../../assets/images/imagem.png'

const ProductList = () => (
  <SectionContainer>
    <List className="container">
      <li>
        <Product
          title="Hioki Sushi"
          image={cardBg}
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Destaque da semana', 'Japonesa']}
        />
      </li>
      <li>
        <Product
          title="Hioki Sushi"
          image={cardBg}
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Destaque da semana', 'Japonesa']}
        />
      </li>
      <li>
        <Product
          title="Hioki Sushi"
          image={cardBg}
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Destaque da semana', 'Japonesa']}
        />
      </li>
      <li>
        <Product
          title="Hioki Sushi"
          image={cardBg}
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos={['Destaque da semana', 'Japonesa']}
        />
      </li>
    </List>
  </SectionContainer>
)

export default ProductList
