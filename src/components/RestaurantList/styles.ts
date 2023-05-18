import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: transparent;
`

export const SectionContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  background-color: ${colors.skin};
`
