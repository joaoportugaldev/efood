import { useDispatch, useSelector } from 'react-redux'

import Checkout from '../Checkout'
import { Button } from '../Button'

import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'
import { getTotalPrice } from '../../utils'
import { parseToBrl } from '../../utils'

import lixeira from '../../assets/images/lixeira.svg'
import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items, isCheckout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))
  const goCheckout = () => dispatch(openCheckout())

  const handleClick = () => {
    if (items.length === 0) {
      closeCart()
    } else {
      goCheckout()
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={() => closeCart()}></div>
      <S.Sidebar>
        {!isCheckout ? (
          <>
            <ul>
              {items.map((item) => (
                <S.Item key={item.nome}>
                  <S.Imagem src={item.foto} alt="Pizza de Marguerita" />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)}>
                    <img src={lixeira} alt="Botão de exluir produto" />
                  </button>
                </S.Item>
              ))}
            </ul>
            <S.Price>
              <span>Valor Total</span>
              <span>{parseToBrl(getTotalPrice(items))}</span>
            </S.Price>
            <Button
              type="button"
              title="Clique para continuar a compra"
              width="full"
              onClick={handleClick}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <Checkout />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
