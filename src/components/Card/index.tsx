import { Button } from '../Button'

import star from '../../assets/images/estrela.svg'
import { Tag } from '../Tag'
import * as S from './styles'

export type Props = {
  type: 'restaurant' | 'dish'
  title: string
  image: string
  rate?: number
  description: string
  infos?: string[]
  onClick?: () => void
}

export const Card = ({
  type,
  title,
  image,
  rate,
  description,
  infos,
  onClick
}: Props) => (
  <S.Card type={type}>
    <S.Image
      type={type}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
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
        <S.Title onClick={onClick}>{title}</S.Title>
      )}
      <S.Description>{description}</S.Description>
      {type === 'restaurant' ? (
        <Button title="Saiba mais" to="/menu" type="link">
          Saiba mais
        </Button>
      ) : (
        <Button title="Adicionar" type="button">
          Adicionar ao Carrinho
        </Button>
      )}
    </S.AboutContainer>
  </S.Card>
)
