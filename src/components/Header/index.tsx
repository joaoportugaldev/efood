import logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/bg.png'
import { HeaderContainer, Title } from './styles'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${bgImage})` }}>
    <img src={logo} alt="Logo" />
    <Title>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </Title>
  </HeaderContainer>
)

export default Header
