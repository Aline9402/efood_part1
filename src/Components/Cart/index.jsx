import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { Overlay, CartContainer, Sidebar, CartItem } from './styles'

export default function Cart() {
    const { isOpen, items } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
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

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
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
                <button title="Clique para continuar com a entrega">Continuar com a entrega</button>
            </Sidebar>
        </CartContainer>
    )
}