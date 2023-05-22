import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/bg.png'
import { HeaderContainer, HeaderLink, Cart } from './styles'

const HeaderMenu = () => (
  <HeaderContainer style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container">
      <nav>
        <HeaderLink to={'/'}>Restaurantes</HeaderLink>
        <Link to={'/'}>
          <img src={logo} alt="Logo" />
        </Link>
        <Cart>
          <span>0 produto(s) no carrinho</span>
        </Cart>
      </nav>
    </div>
  </HeaderContainer>
)

export default HeaderMenu
