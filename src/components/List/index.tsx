import { Card } from '../Card'
import * as S from './styles'
import Restaurant from '../../models/Restaurant'
import Dish from '../../models/Dish'

export type Props = {
  type: 'restaurant' | 'menu'
  restaurants?: Restaurant[]
  menu?: Dish[]
}

const List = ({ restaurants, type, menu }: Props) => (
  <S.SectionContainer>
    <S.List type={type} className="container">
      {type === 'restaurant'
        ? restaurants?.map((restaurant) => (
            <Card
              type="restaurant"
              key={restaurant.id}
              title={restaurant.title}
              image={restaurant.image}
              rate={restaurant.rate}
              description={restaurant.description}
              infos={restaurant.infos}
            />
          ))
        : menu?.map((dish) => (
            <Card
              type="dish"
              key={dish.id}
              title={dish.title}
              image={dish.image}
              description={dish.description}
            />
          ))}
    </S.List>
  </S.SectionContainer>
)

export default List
