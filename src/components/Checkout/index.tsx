import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { Button } from '../Button'

import { parseToBrl, getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'
import { close, clean } from '../../store/reducers/cart'
import { closeCheckout } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as enums from '../../utils/enums'

import * as S from './styles'

const Checkout = () => {
  const [step, setStep] = useState(enums.Checkout.ADDRESS)

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const exitCheckout = () => dispatch(closeCheckout())
  const closeCart = () => dispatch(close())

  const form = useFormik({
    initialValues: {
      destinatario: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nome: '',
      numeroNoCartao: '',
      cvv: '',
      mesDeVencimento: '',
      anoDeVencimento: ''
    },
    validationSchema: Yup.object({
      destinatario: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(5, 'Cidade inválida')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .max(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string(),
      nome: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      numeroNoCartao: Yup.string()
        .min(18, 'Número de cartão inválido')
        .max(19, 'Número de cartão inválido')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV deve ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      mesDeVencimento: Yup.string()
        .min(2, 'Mês inválido')
        .required('O campo é obrigatório'),
      anoDeVencimento: Yup.string()
        .min(4, 'Ano inválido')
        .max(4, 'Ano inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.destinatario,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: `${values.cep}`,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nome,
            number: values.numeroNoCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesDeVencimento),
              year: Number(values.anoDeVencimento)
            }
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clean())
    }
  }, [isSuccess, dispatch])

  const handleFinishButton = () => {
    setStep(enums.Checkout.ADDRESS)
    exitCheckout()
    closeCart()
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {isSuccess && data ? (
        <S.Container>
          <h2>Pedido realizado - {data.orderId}</h2>
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
        </S.Container>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {step === enums.Checkout.ADDRESS && (
            <S.Container>
              <h2>Entrega</h2>
              <S.InputGroup>
                <label htmlFor="destinatario">Quem irá receber</label>
                <input
                  type="text"
                  id="destinatario"
                  name="destinatario"
                  value={form.values.destinatario}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('destinatario') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('endereco') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cidade') ? 'error' : ''}
                />
              </S.InputGroup>
              <div className="number-inputs">
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask={'99999.999'}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <S.InputGroup>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <textarea
                  id="complemento"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complemento') ? 'error' : ''}
                />
              </S.InputGroup>
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
            </S.Container>
          )}
          {step === enums.Checkout.PAYMENT && (
            <S.Container>
              <h2>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
              </h2>
              <S.InputGroup>
                <label htmlFor="nome">Nome no cartão</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.values.nome}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nome') ? 'error' : ''}
                />
              </S.InputGroup>
              <div className="number-inputs">
                <S.InputGroup maxWidth="228px">
                  <label htmlFor="numeroNoCartao">Número no cartão</label>
                  <InputMask
                    type="text"
                    id="numeroNoCartao"
                    name="numeroNoCartao"
                    value={form.values.numeroNoCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('numeroNoCartao') ? 'error' : ''
                    }
                    mask={'9999 9999 9999 9999'}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="87px">
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvv') ? 'error' : ''}
                    mask={'999'}
                  />
                </S.InputGroup>
              </div>
              <div className="number-inputs">
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="mesDeVencimento"
                    name="mesDeVencimento"
                    value={form.values.mesDeVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('mesDeVencimento') ? 'error' : ''
                    }
                    mask={'99'}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="anoDeVencimento">Ano de Vencimento</label>
                  <InputMask
                    type="text"
                    id="anoDeVencimento"
                    name="anoDeVencimento"
                    value={form.values.anoDeVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('anoDeVencimento') ? 'error' : ''
                    }
                    mask={'9999'}
                  />
                </S.InputGroup>
              </div>
              <Button
                type="button"
                title="Continuar com o pagamento"
                width="full"
                marginTop="16px"
                onClick={() => {
                  form.handleSubmit()
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              </Button>
              <Button
                type="button"
                title="Continuar com o pagamento"
                width="full"
                marginTop="8px"
                onClick={() => setStep(enums.Checkout.ADDRESS)}
                disabled={isLoading}
              >
                Voltar para a edição de endereço
              </Button>
            </S.Container>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
