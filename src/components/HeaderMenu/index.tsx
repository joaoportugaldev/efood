import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/bg.png'
import { HeaderContainer, HeaderLink, Cart } from './styles'
import { RootReducer } from '../../store'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

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
            <span>{items.length} produto(s) no carrinho</span>
          </Cart>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default HeaderMenu
