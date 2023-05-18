import Button from '../Button'

import star from '../../assets/images/estrela.svg'
import { Tag } from '../Tag'
import {
  Card,
  Image,
  AboutContainer,
  CardTitle,
  Description,
  TagContainer,
  RateContainer
} from './styles'

type Props = {
  title: string
  image: string
  rate: number
  description: string
  infos: string[]
}

export const Restaurant = ({
  title,
  image,
  rate,
  description,
  infos
}: Props) => (
  <Card>
    <Image imageURL={image}>
      <TagContainer>
        <div>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </div>
      </TagContainer>
    </Image>
    <AboutContainer>
      <div>
        <CardTitle>{title}</CardTitle>
        <RateContainer>
          <CardTitle>{rate}</CardTitle>
          <img src={star} alt="Estrela" />
        </RateContainer>
      </div>
      <Description>{description}</Description>
      <Button title="Saiba mais" to="/restaurantes" type="link">
        Saiba mais
      </Button>
    </AboutContainer>
  </Card>
)
