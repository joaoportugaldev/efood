import { Restaurant } from '../Restaurant'
import { List, SectionContainer } from './styles'
import RestaurantItem from '../../models/Restaurant'

type Props = {
  restaurants: RestaurantItem[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <SectionContainer>
    <List className="container">
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          title={restaurant.title}
          image={restaurant.image}
          rate={restaurant.rate}
          description={restaurant.description}
          infos={restaurant.infos}
        />
      ))}
    </List>
  </SectionContainer>
)

export default RestaurantsList
