import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/bg.png'
import { HeaderContainer, HeaderLink, Cart } from './styles'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <nav>
          <HeaderLink to={'/'}>Restaurantes</HeaderLink>
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
          <Cart onClick={() => openCart()}>
            <span>0 produto(s) no carrinho</span>
          </Cart>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default HeaderMenu
