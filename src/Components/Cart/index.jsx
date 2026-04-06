import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { Overlay, CartContainer, Sidebar, CartItem, InputGroup, Row, CheckoutTitle, ConfirmationText, SubmitButton, ButtonGroup } from './styles'

export default function Cart() {
    const { isOpen, items } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [step, setStep] = useState('cart')
    const [orderId, setOrderId] = useState('')

    const [formData, setFormData] = useState({
        receiver: '', address: '', city: '', zipCode: '', number: '', complement: '',
        cardName: '', cardNumber: '', cvv: '', expiresMonth: '', expiresYear: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const closeCart = () => {
        dispatch(close())
        setStep('cart')
    }

    const removeItem = (id) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            let precoNumerico = 0;
            if (valorAtual.preco) {
                precoNumerico = Number(valorAtual.preco.toString().replace(',', '.'))
            }
            return acumulador + precoNumerico
        }, 0).toFixed(2).replace('.', ',')
    }

    const irParaPagamento = (e) => {
        e.preventDefault()
        setStep('payment')
    }

    const finalizarPedido = (e) => {
        e.preventDefault()

        const payload = {
            products: items.map(item => ({
                id: item.id,
                price: Number(item.preco.toString().replace(',', '.'))
            })),
            delivery: {
                receiver: formData.receiver,
                address: {
                    description: formData.address,
                    city: formData.city,
                    zipCode: formData.zipCode,
                    number: Number(formData.number),
                    complement: formData.complement
                }
            },
            payment: {
                card: {
                    name: formData.cardName,
                    number: formData.cardNumber,
                    code: Number(formData.cvv),
                    expires: {
                        month: Number(formData.expiresMonth),
                        year: Number(formData.expiresYear)
                    }
                }
            }
        }

        fetch('https://api-ebac.vercel.app/api/efood/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((data) => {
            setOrderId(data.orderId)
            setStep('confirmation')
        })
        .catch((erro) => console.error(erro))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                {step === 'cart' && (
                    <>
                        <ul>
                            {items.map(item => (
                                <CartItem key={item.id}>
                                    <img src={item.foto} alt={item.nome} />
                                    <div>
                                        <h3>{item.nome}</h3>
                                        <span>R$ {item.preco}</span>
                                    </div>
                                    <button type="button" onClick={() => removeItem(item.id)} />
                                </CartItem>
                            ))}
                        </ul>
                        <div className="prices">
                            <p>Valor total</p>
                            <span>R$ {getTotalPrice()}</span>
                        </div>
                        <SubmitButton type="button" onClick={() => setStep('delivery')}>
                            Continuar com a entrega
                        </SubmitButton>
                    </>
                )}

                {step === 'delivery' && (
                    <form onSubmit={irParaPagamento}>
                        <CheckoutTitle>Entrega</CheckoutTitle>
                        
                        <InputGroup>
                            <label htmlFor="receiver">Quem irá receber</label>
                            <input type="text" id="receiver" name="receiver" value={formData.receiver} onChange={handleInputChange} required />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="address">Endereço</label>
                            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                        </InputGroup>

                        <Row>
                            <InputGroup>
                                <label htmlFor="zipCode">CEP</label>
                                <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required minLength={8} maxLength={9} />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="number">Número</label>
                                <input type="number" id="number" name="number" value={formData.number} onChange={handleInputChange} required />
                            </InputGroup>
                        </Row>

                        <InputGroup>
                            <label htmlFor="complement">Complemento (opcional)</label>
                            <input type="text" id="complement" name="complement" value={formData.complement} onChange={handleInputChange} />
                        </InputGroup>

                        <ButtonGroup>
                            <SubmitButton type="submit">
                                Continuar com o pagamento
                            </SubmitButton>
                            <SubmitButton type="button" onClick={() => setStep('cart')}>
                                Voltar para o carrinho
                            </SubmitButton>
                        </ButtonGroup>
                    </form>
                )}

                {step === 'payment' && (
                    <form onSubmit={finalizarPedido}>
                        <CheckoutTitle>Pagamento - Valor a pagar R$ {getTotalPrice()}</CheckoutTitle>
                        
                        <InputGroup>
                            <label htmlFor="cardName">Nome no cartão</label>
                            <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleInputChange} required />
                        </InputGroup>

                        <Row>
                            <InputGroup>
                                <label htmlFor="cardNumber">Número do cartão</label>
                                <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required minLength={16} maxLength={16} />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} required minLength={3} maxLength={3} />
                            </InputGroup>
                        </Row>

                        <Row>
                            <InputGroup>
                                <label htmlFor="expiresMonth">Mês de vencimento</label>
                                <input type="text" id="expiresMonth" name="expiresMonth" value={formData.expiresMonth} onChange={handleInputChange} required minLength={2} maxLength={2} />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="expiresYear">Ano de vencimento</label>
                                <input type="text" id="expiresYear" name="expiresYear" value={formData.expiresYear} onChange={handleInputChange} required minLength={4} maxLength={4} />
                            </InputGroup>
                        </Row>

                        <ButtonGroup>
                            <SubmitButton type="submit">
                                Finalizar pagamento
                            </SubmitButton>
                            <SubmitButton type="button" onClick={() => setStep('delivery')}>
                                Voltar para a edição de endereço
                            </SubmitButton>
                        </ButtonGroup>
                    </form>
                )}

                {step === 'confirmation' && (
                    <>
                        <CheckoutTitle>Pedido realizado - {orderId}</CheckoutTitle>
                        <ConfirmationText>
                            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                            <br /><br />
                            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                            <br /><br />
                            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                            <br /><br />
                            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                        </ConfirmationText>
                        <SubmitButton type="button" onClick={closeCart}>
                            Concluir
                        </SubmitButton>
                    </>
                )}
            </Sidebar>
        </CartContainer>
    )
}