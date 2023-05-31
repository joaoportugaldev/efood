import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { formataPreco, getTotalPrice } from '../../utils'
import * as enums from '../../utils/enums/Cart'

import { close, clean } from '../../store/reducers/cart'
import { Button } from '../Button'
import { Container, InputGroup } from './styles'
import { closeCheckout } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Checkout = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [step, setStep] = useState(enums.Checkout.ADDRESS)

  const exitCheckout = () => dispatch(closeCheckout())
  const closeCart = () => dispatch(close())
  const cleanCart = () => dispatch(clean())

  const handleFinishButton = () => {
    setStep(enums.Checkout.ADDRESS)
    exitCheckout()
    closeCart()
    cleanCart()
  }

  return (
    <>
      {step === enums.Checkout.ADDRESS && (
        <Container>
          <h2>Entrega</h2>
          <InputGroup>
            <label htmlFor="destinatario">Quem irá receber</label>
            <input type="text" id="destinatario" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" />
          </InputGroup>
          <div className="number-inputs">
            <InputGroup maxWidth="155px">
              <label htmlFor="cep">CEP</label>
              <input type="number" id="cep" />
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="numero">Número</label>
              <input type="number" id="numero" />
            </InputGroup>
          </div>
          <InputGroup>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <textarea id="complemento" />
          </InputGroup>
          <Button
            type="button"
            title="Continuar com o pagamento"
            width="full"
            marginTop="16px"
            onClick={() => setStep(enums.Checkout.PAYMENT)}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            title="Voltar"
            width="full"
            marginTop="8px"
            onClick={() => exitCheckout()}
          >
            Voltar para o carrinho
          </Button>
        </Container>
      )}
      {step === enums.Checkout.PAYMENT && (
        <>
          <Container>
            <h2>
              Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
            </h2>
            <InputGroup>
              <label htmlFor="nome">Nome no cartão</label>
              <input type="text" id="nome" />
            </InputGroup>
            <div className="number-inputs">
              <InputGroup maxWidth="228px">
                <label htmlFor="numero-no-cartao">Número no cartão</label>
                <input type="number" id="numero-no-cartao" />
              </InputGroup>
              <InputGroup maxWidth="87px">
                <label htmlFor="cvv">CVV</label>
                <input type="number" id="cvv" />
              </InputGroup>
            </div>
            <div className="number-inputs">
              <InputGroup maxWidth="155px">
                <label htmlFor="mes-de-vencimento">Mês de vencimento</label>
                <input type="number" id="mes-de-vencimento" />
              </InputGroup>
              <InputGroup maxWidth="155px">
                <label htmlFor="ano-de-vencimento">Ano de Vencimento</label>
                <input type="number" id="ano-de-vencimento" />
              </InputGroup>
            </div>
            <Button
              type="button"
              title="Continuar com o pagamento"
              width="full"
              marginTop="16px"
              onClick={() => setStep(enums.Checkout.MESSAGE)}
            >
              Finalizar Pagamento
            </Button>
            <Button
              type="button"
              title="Continuar com o pagamento"
              width="full"
              marginTop="8px"
              onClick={() => setStep(enums.Checkout.ADDRESS)}
            >
              Voltar para a edição de endereço
            </Button>
          </Container>
        </>
      )}
      {step === enums.Checkout.MESSAGE && (
        <Container>
          <h2>Pedido realizado - id</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. Lembre-se da importância de
            higienizar as mãos após o recebimento do pedido, garantindo assim
            sua segurança e bem-estar durante a refeição. Esperamos que desfrute
            de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </p>
          <Button
            type="button"
            title="Continuar com o pagamento"
            width="full"
            onClick={() => handleFinishButton()}
          >
            Concluir
          </Button>
        </Container>
      )}
    </>
  )
}

export default Checkout
