import { useState } from 'react'

import { Restaurante } from '../../pages/Home'
import { ModalProps } from '../ModalMenu'

import { Card } from '../Card'
import * as S from './styles'
import { Prato } from '../../pages/Home'
import ModalMenu from '../ModalMenu'

export type Props = {
  type: 'restaurant' | 'menu'
  restaurantes?: Restaurante[]
  menu?: Prato[]
}

type ModalState = Omit<ModalProps, 'onClose'>

const List = ({ restaurantes, type, menu }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    title: '',
    image: '',
    description: '',
    porcao: '',
    price: '',
    isVisible: false
  })

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getRestauranteTags = (infos: string) => {
    const tags = []

    if (infos.length) {
      tags.push(infos)
    }

    return tags
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
                    onClick={() =>
                      setModal({
                        title: prato.nome,
                        image: prato.foto,
                        description: prato.descricao,
                        porcao: prato.porcao,
                        price: formataPreco(prato.preco),
                        isVisible: true
                      })
                    }
                  />
                </li>
              ))}
        </S.List>
      </S.Section>
      <ModalMenu
        isVisible={modal.isVisible}
        onClose={() =>
          setModal({
            title: '',
            image: '',
            description: '',
            porcao: '',
            price: '',
            isVisible: false
          })
        }
        title={modal.title}
        image={modal.image}
        description={modal.description}
        porcao={`Serve ${modal.porcao}`}
        price={modal.price}
      />
    </>
  )
}

export default List
