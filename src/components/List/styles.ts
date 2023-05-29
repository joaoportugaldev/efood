import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import { Props } from '.'

type ListProps = Omit<Props, 'restaurants' | 'menu'>

export const List = styled.section<ListProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.type === 'restaurant' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) => (props.type === 'restaurant' ? '80px' : '32px')};
  row-gap: ${(props) => (props.type === 'restaurant' ? '48px' : '32px')};
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: transparent;

  li {
    background-color: ${colors.vermelho};
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: ${() => '1fr 1fr'};
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: ${() => '1fr'};
  }
`

export const Section = styled.div`
  max-width: 100vw;
  width: 100%;
  background-color: ${colors.skin};
`
