import { SyncLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

export const Loader = () => (
  <Container>
    <SyncLoader color={colors.red} />
  </Container>
)
