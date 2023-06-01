import * as S from './styles'

export type BannerProps = {
  title: string
  category: string
  bgImage: string
}

export const Banner = ({ title, category, bgImage }: BannerProps) => (
  <S.Container bgImage={bgImage}>
    <div className="container">
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
    </div>
  </S.Container>
)
