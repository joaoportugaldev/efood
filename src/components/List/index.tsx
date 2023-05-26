import { Restaurante } from '../../pages/Home'

import { openModal } from '../../store/reducers/modal'

import { Card } from '../Card'
import * as S from './styles'
import { Prato } from '../../pages/Home'
import ModalMenu from '../ModalMenu'
import { useDispatch } from 'react-redux'

export type Props = {
  type: 'restaurant' | 'menu'
  restaurantes?: Restaurante[]
  menu?: Prato[]
}

const List = ({ restaurantes, type, menu }: Props) => {
  const dispatch = useDispatch()

  const getRestauranteTags = (infos: string) => {
    const tags = []

    if (infos.length) {
      tags.push(infos)
    }

    return tags
  }

  const setModal = (prato: Prato) => {
    dispatch(openModal(prato))
  }

  return (
    <>
      <S.Section>
        <S.List type={type} className="container">
          {type === 'restaurant'
            ? restaurantes?.map((restaurante) => (
                <li key={restaurante.id}>
                  <Card
                    id={restaurante.id}
                    type="restaurant"
                    title={restaurante.titulo}
                    image={restaurante.capa}
                    rate={restaurante.avaliacao}
                    description={restaurante.descricao}
                    infos={getRestauranteTags(restaurante.tipo)}
                  />
                </li>
              ))
            : menu?.map((prato) => (
                <li key={prato.id}>
                  <Card
                    id={prato.id}
                    type="dish"
                    title={prato.nome}
                    image={prato.foto}
                    description={prato.descricao}
                    onClick={() => setModal(prato)}
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
