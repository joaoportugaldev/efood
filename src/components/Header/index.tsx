import logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/bg.png'

import * as S from './styles'

const Header = () => (
  <S.HeaderContainer style={{ backgroundImage: `url(${bgImage})` }}>
    <img src={logo} alt="Logo" />
    <S.Title>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </S.Title>
  </S.HeaderContainer>
)

export default Header
