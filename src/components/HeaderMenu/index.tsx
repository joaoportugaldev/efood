import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/bg.png'

import * as S from './styles'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <nav>
          <S.HeaderLink title="Voltar para a lista de restaurantes" to={'/'}>
            Restaurantes
          </S.HeaderLink>
          <Link title="Voltar para a Home" to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
          <S.Cart onClick={() => openCart()}>
            <span>{items.length} produto(s) no carrinho</span>
          </S.Cart>
        </nav>
      </div>
    </S.HeaderContainer>
  )
}

export default HeaderMenu
