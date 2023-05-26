import { useDispatch } from 'react-redux'

import { Button } from '../Button'
import { add, open } from '../../store/reducers/cart'

import star from '../../assets/images/estrela.svg'
import { Tag } from '../Tag'
import * as S from './styles'
import { Prato } from '../../pages/Home'

export type Props = {
  type: 'restaurant' | 'dish'
  prato?: Prato
  title: string
  image: string
  rate?: number
  description: string
  infos?: string[]
  onClick?: () => void
  id: number
}

export const Card = ({
  type,
  prato,
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
    if (prato) {
      dispatch(add(prato))
    }
  }

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

  return (
    <S.Card type={type} onClick={handleCardClick}>
      <S.Image type={type} style={{ backgroundImage: `url(${image})` }}>
        {type === 'restaurant' && (
          <S.Tags>
            {infos?.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </S.Tags>
        )}
      </S.Image>
      <S.AboutContainer>
        {type === 'restaurant' ? (
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.Rate>
              <S.Title>{rate}</S.Title>
              <img src={star} alt="Estrela" />
            </S.Rate>
          </S.Header>
        ) : (
          <S.Title>{title}</S.Title>
        )}
        {type === 'restaurant' ? (
          <S.Description>{description}</S.Description>
        ) : (
          <S.Description>{getDescricao(description)}</S.Description>
        )}
        {type === 'restaurant' ? (
          <Button title="Saiba mais" to={`/menu/${id}`} type="link">
            Saiba mais
          </Button>
        ) : (
          <Button
            title="Adicionar"
            type="button"
            onClick={() => {
              openCart()
              addToCart()
            }}
          >
            Adicionar ao Carrinho
          </Button>
        )}
      </S.AboutContainer>
    </S.Card>
  )
}
