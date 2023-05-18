import { Category, Container, Title } from './styles'

export type BannerProps = {
  title: string
  category: string
  bgImage: string
}

export const Banner = ({ title, category, bgImage }: BannerProps) => (
  <Container bgImage={bgImage}>
    <div className="container">
      <Category>{category}</Category>
      <Title>{title}</Title>
    </div>
  </Container>
)
