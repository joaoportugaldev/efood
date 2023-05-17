import styled from 'styled-components'
import { colors } from '../../styles'

type ImageProps = {
  imageURL: string
}

export const Card = styled.div`
  background-color: ${colors.branco};
`

export const Image = styled.div<ImageProps>`
  height: 217px;
  width: 100%;
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
`

export const AboutContainer = styled.div`
  padding: 8px;
  border: 1px solid ${colors.vermelho};
  border-top-width: 0;

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin: 16px 0px;
`

export const TagContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-right: 16px;
`

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
