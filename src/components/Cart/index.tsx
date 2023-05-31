import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice } from '../../utils'

import { Button } from '../Button'
import {
  CartContainer,
  Sidebar,
  Item,
  Imagem,
  Price,
  InputContainer,
  FormContainer
} from './styles'

import lixeira from '../../assets/images/lixeira.svg'
import { formataPreco } from '../../utils'

const Cart = () => {
  const [cartStep, setCartStep] = useState({
    cart: true,
    address: false,
    checkout: false,
    message: false
  })

  const dispatch = useDispatch()

  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={() => closeCart()}></div>
      <Sidebar>
        {cartStep.cart && (
          <>
            <ul>
              {items.map((item) => (
                <Item key={item.nome}>
                  <Imagem src={item.foto} alt="Pizza de Marguerita" />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)}>
                    <img src={lixeira} alt="Botão de exluir produto" />
                  </button>
                </Item>
              ))}
            </ul>
            <Price>
              <span>Valor Total</span>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </Price>
            <Button
              type="button"
              title="Clique para continuar a compra"
              width="full"
              onClick={() =>
                setCartStep({
                  cart: false,
                  address: true,
                  checkout: false,
                  message: false
                })
              }
            >
              Continuar com a compra
            </Button>
          </>
        )}
        {cartStep.address && (
          <>
            <FormContainer>
              <h2>Entrega</h2>
              <InputContainer>
                <label htmlFor="destinatario">Quem irá receber</label>
                <input type="text" id="destinatario" />
              </InputContainer>
              <InputContainer>
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco" />
              </InputContainer>
              <InputContainer>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" />
              </InputContainer>
              <div className="number-inputs">
                <InputContainer maxWidth="155px">
                  <label htmlFor="cep">CEP</label>
                  <input type="number" id="cep" />
                </InputContainer>
                <InputContainer maxWidth="155px">
                  <label htmlFor="numero">Número</label>
                  <input type="number" id="numero" />
                </InputContainer>
              </div>
              <InputContainer>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <textarea id="complemento" />
              </InputContainer>
              <Button
                type="button"
                title="Continuar com o pagamento"
                width="full"
                marginTop="16px"
                onClick={() =>
                  setCartStep({
                    cart: false,
                    address: false,
                    checkout: true,
                    message: false
                  })
                }
              >
                Continuar com o pagamento
              </Button>
              <Button
                type="button"
                title="Voltar"
                width="full"
                marginTop="8px"
                onClick={() =>
                  setCartStep({
                    cart: true,
                    address: false,
                    checkout: false,
                    message: false
                  })
                }
              >
                Voltar para o carrinho
              </Button>
            </FormContainer>
          </>
        )}
        {cartStep.checkout && (
          <>
            <FormContainer>
              <h2>
                Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
              </h2>
              <InputContainer>
                <label htmlFor="nome">Nome no cartão</label>
                <input type="text" id="nome" />
              </InputContainer>
              <div className="number-inputs">
                <InputContainer maxWidth="228px">
                  <label htmlFor="numero-no-cartao">Número no cartão</label>
                  <input type="number" id="numero-no-cartao" />
                </InputContainer>
                <InputContainer maxWidth="87px">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" id="cvv" />
                </InputContainer>
              </div>
              <div className="number-inputs">
                <InputContainer maxWidth="155px">
                  <label htmlFor="mes-de-vencimento">Mês de vencimento</label>
                  <input type="number" id="mes-de-vencimento" />
                </InputContainer>
                <InputContainer maxWidth="155px">
                  <label htmlFor="ano-de-vencimento">Ano de Vencimento</label>
                  <input type="number" id="ano-de-vencimento" />
                </InputContainer>
              </div>
              <Button
                type="button"
                title="Continuar com o pagamento"
                width="full"
                marginTop="16px"
                onClick={() =>
                  setCartStep({
                    cart: false,
                    address: false,
                    checkout: false,
                    message: true
                  })
                }
              >
                Finalizar Pagamento
              </Button>
              <Button
                type="button"
                title="Continuar com o pagamento"
                width="full"
                marginTop="8px"
                onClick={() =>
                  setCartStep({
                    cart: false,
                    address: true,
                    checkout: false,
                    message: false
                  })
                }
              >
                Voltar para a edição de endereço
              </Button>
            </FormContainer>
          </>
        )}
        {cartStep.message && (
          <FormContainer>
            <h2>Pedido realizado - id</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. Lembre-se da importância
              de higienizar as mãos após o recebimento do pedido, garantindo
              assim sua segurança e bem-estar durante a refeição. Esperamos que
              desfrute de uma deliciosa e agradável experiência gastronômica.
              Bom apetite!
            </p>
            <Button
              type="button"
              title="Continuar com o pagamento"
              width="full"
              onClick={() =>
                setCartStep({
                  cart: true,
                  address: false,
                  checkout: false,
                  message: false
                })
              }
            >
              Concluir
            </Button>
          </FormContainer>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
