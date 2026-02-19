import { useState } from 'react' // Importamos o hook do React
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductCard from '../../Components/ProductCard'
import { PerfilContainer, HeaderPerfil, ProductList, Modal, ModalContent, ModalImage, ModalInfos } from './styles'

export default function Perfil() {
    // Estado para controlar se o modal está visível
    const [modalEstaAberto, setModalEstaAberto] = useState(false)
    
    // Estado para guardar os dados da pizza que foi clicada
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)

    const restaurant = {
        title: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        backgroundImage: '/imagens/fundo-perfil.png', // Mantenha o nome que você arrumou
        products: [
            { id: 1, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/Produtos/massa.png', portion: 'de 2 a 3 pessoas', price: '60,90' },
            { id: 2, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/Produtos/massa.png', portion: 'de 2 a 3 pessoas', price: '60,90' },
            { id: 3, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/Produtos/massa.png', portion: 'de 2 a 3 pessoas', price: '60,90' },
            { id: 4, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/Produtos/massa.png', portion: 'de 2 a 3 pessoas', price: '60,90' },
            { id: 5, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/Produtos/massa.png', portion: 'de 2 a 3 pessoas', price: '60,90' },
            { id: 6, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/Produtos/massa.png', portion: 'de 2 a 3 pessoas', price: '60,90' }
        ]
    }

    // Função para abrir o modal com a pizza certa
    const abrirModal = (produto) => {
        setProdutoSelecionado(produto)
        setModalEstaAberto(true)
    }

    return (
        <PerfilContainer>
            <HeaderPerfil>
                <div className="container">
                    <Link to="/">Restaurantes</Link>
                    <img src="/imagens/logo.png" alt="Logo efood" />
                    <span>0 produto(s) no carrinho</span>
                </div>
            </HeaderPerfil>

            <Hero
                backgroundImage={restaurant.backgroundImage}
                category={restaurant.category}
                title={restaurant.title}
            />

            <ProductList>
                {restaurant.products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        // Quando clica no card, executa a função abrirModal passando a pizza
                        onClick={() => abrirModal(product)} 
                    />
                ))}
            </ProductList>

            {/* NOSSO MODAL */}
            <Modal className={modalEstaAberto ? 'visivel' : ''}>
                <ModalContent>
                    {/* Botão de Fechar. Usei um X em texto, mas você pode trocar pelo src da imagem do figma */}
                    <img 
                        src="/imagens/fechar.png" 
                        alt="Fechar" 
                        className="close-icon" 
                        onClick={() => setModalEstaAberto(false)} 
                    />
                    
                    {/* Se tiver um produto selecionado, mostra a imagem e as infos */}
                    {produtoSelecionado && (
                        <>
                            <ModalImage src={produtoSelecionado.image} alt={produtoSelecionado.title} />
                            <ModalInfos>
                                <h4>{produtoSelecionado.title}</h4>
                                <p>
                                    {produtoSelecionado.description}
                                    <br /><br />
                                    Serve: {produtoSelecionado.portion}
                                </p>
                                <button>
                                    Adicionar ao carrinho - R$ {produtoSelecionado.price}
                                </button>
                            </ModalInfos>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Footer />
        </PerfilContainer>
    )
}