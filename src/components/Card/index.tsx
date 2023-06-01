import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../Button'
import { Tag } from '../Tag'

import { RootReducer } from '../../store'
import { add, closeCheckout, open } from '../../store/reducers/cart'

import star from '../../assets/images/estrela.svg'
import * as S from './styles'

export type Props = {
  typeDefault: boolean
  dish?: Dish
  title: string
  image: string
  rate?: number
  description: string
  infos?: string[]
  onClick?: () => void
  id: number
}

export const Card = ({
  typeDefault = true,
  dish,
  title,
  image,
  rate,
  description,
  infos,
  onClick,
  id
}: Props) => {
  const dispatch = useDispatch()
  const openCart = () => dispatch(open())
  const addToCart = () => {
    if (dish) {
      dispatch(add(dish))
    }
  }

  const { isCheckout } = useSelector((state: RootReducer) => state.cart)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const isButtonClick = (event.target as HTMLElement).closest('button')
    if (!isButtonClick) {
      if (onClick) {
        onClick()
      }
    }
  }

  const exitCheckout = () => {
    if (isCheckout) dispatch(closeCheckout())
  }

  const handleButtonClick = () => {
    openCart()
    addToCart()
    exitCheckout()
  }

  return (
    <S.Card typeDefault={typeDefault} onClick={handleCardClick}>
      {typeDefault ? (
        <>
          <S.Image
            typeDefault={typeDefault}
            style={{ backgroundImage: `url(${image})` }}
          >
            <S.Tags>
              {infos?.map((info) => (
                <Tag key={info}>{info}</Tag>
              ))}
            </S.Tags>
          </S.Image>
          <S.AboutContainer>
            <S.Header>
              <S.Title>{title}</S.Title>
              <S.Rate>
                <S.Title>{rate}</S.Title>
                <img src={star} alt="Estrela" />
              </S.Rate>
            </S.Header>
            <S.Description>{description}</S.Description>
            <Button
              title={`Clique aqui para abrir o menu do restaurante ${title}`}
              to={`/menu/${id}`}
              type="link"
            >
              Saiba mais
            </Button>
          </S.AboutContainer>
        </>
      ) : (
        <>
          <S.Image
            typeDefault={typeDefault}
            style={{ backgroundImage: `url(${image})` }}
          />
          <S.AboutContainer>
            <S.Title>{title}</S.Title>
            <S.Description>{getDescricao(description)}</S.Description>
            <Button
              title="Adicionar"
              type="button"
              onClick={() => handleButtonClick()}
            >
              Adicionar ao Carrinho
            </Button>
          </S.AboutContainer>
        </>
      )}
    </S.Card>
  )
}
