import styled from 'styled-components'
import { colors } from '../../styles'

import { BannerProps } from '.'

type Props = Omit<BannerProps, 'category' | 'title'>

export const Container = styled.div<Props>`
  height: 280px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-size: 32px;
  color: ${colors.white};

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Category = styled.h3`
  margin-top: 28px;
  font-weight: lighter;
  text-transform: capitalize;
`

export const Title = styled.h2`
  font-weight: 900;
  margin-bottom: 32px;
`
