import { useDispatch } from 'react-redux'

import { Card } from '../Card'
import ModalMenu from '../ModalMenu'

import { openModal } from '../../store/reducers/modal'

import * as S from './styles'

export type Props = {
  defaultList: boolean
  restaurants?: Restaurant[]
  menu?: Dish[]
}

const List = ({ restaurants, menu, defaultList = true }: Props) => {
  const dispatch = useDispatch()

  const getRestaurantTags = (infos: string) => {
    const tags = []

    if (infos.length) {
      tags.push(infos)
    }

    return tags
  }

  const setModal = (dish: Dish) => {
    dispatch(openModal(dish))
  }

  return (
    <>
      <S.Section>
        <S.List defaultList={defaultList} className="container">
          {defaultList
            ? restaurants?.map((restaurant) => (
                <li key={restaurant.id}>
                  <Card
                    id={restaurant.id}
                    typeDefault={true}
                    title={restaurant.titulo}
                    image={restaurant.capa}
                    rate={restaurant.avaliacao}
                    description={restaurant.descricao}
                    infos={getRestaurantTags(restaurant.tipo)}
                  />
                </li>
              ))
            : menu?.map((dish) => (
                <li key={dish.id}>
                  <Card
                    id={dish.id}
                    dish={dish}
                    typeDefault={false}
                    title={dish.nome}
                    image={dish.foto}
                    description={dish.descricao}
                    onClick={() => setModal(dish)}
                  />
                </li>
              ))}
        </S.List>
      </S.Section>
      <ModalMenu />
    </>
  )
}

export default List
