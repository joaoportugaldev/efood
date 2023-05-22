import { useState } from 'react'

import { Card } from '../Card'
import * as S from './styles'
import Restaurant from '../../models/Restaurant'
import Dish from '../../models/Dish'
import pizza from '../../assets/images/marguerita.png'
import ModalMenu from '../ModalMenu'

export type Props = {
  type: 'restaurant' | 'menu'
  restaurants?: Restaurant[]
  menu?: Dish[]
}

const List = ({ restaurants, type, menu }: Props) => {
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  return (
    <>
      <S.Section>
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
                  onClick={() => setModalIsOpened(true)}
                />
              ))}
        </S.List>
      </S.Section>
      <ModalMenu
        isVisible={modalIsOpened}
        onClose={() => setModalIsOpened(false)}
        title="Pizza Marguerita"
        image={pizza}
        description="A pizza Margherita é uma pizza clássica da culinária italiana,
      reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma
      base de massa fina e crocante, coberta com molho de tomate fresco,
      queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
      A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido,
      o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de
      sabor herbáceo.
      É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é
      uma ótima opção para qualquer ocasião.

      Serve de 2 a 3 pessoas"
      />
    </>
  )
}

export default List
