import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductCard from '../../Components/ProductCard'
import { PerfilContainer, HeaderPerfil, ProductList, Modal, ModalContent, ModalImage, ModalInfos } from './styles'

export default function Perfil() {
    const { id } = useParams()
    const [modalEstaAberto, setModalEstaAberto] = useState(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [restaurante, setRestaurante] = useState(null)

    // Nosso Plano B para o cardápio
    const backupRestaurante = {
        titulo: 'La Dolce Vita Trattoria',
        tipo: 'Italiana',
        capa: '/imagens/Produtos/massa.png',
        cardapio: [
            { id: 1, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', foto: '/imagens/Produtos/massa.png', porcao: 'de 2 a 3 pessoas', preco: '60.90' },
            { id: 2, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', foto: '/imagens/Produtos/massa.png', porcao: 'de 2 a 3 pessoas', preco: '60.90' },
            { id: 3, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', foto: '/imagens/Produtos/massa.png', porcao: 'de 2 a 3 pessoas', preco: '60.90' },
            { id: 4, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', foto: '/imagens/Produtos/massa.png', porcao: 'de 2 a 3 pessoas', preco: '60.90' },
            { id: 5, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', foto: '/imagens/Produtos/massa.png', porcao: 'de 2 a 3 pessoas', preco: '60.90' },
            { id: 6, nome: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', foto: '/imagens/Produtos/massa.png', porcao: 'de 2 a 3 pessoas', preco: '60.90' }
        ]
    }

    useEffect(() => {
        // Tenta pegar da API
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Erro na API')
                return res.json()
            })
            .then((data) => setRestaurante(data))
            .catch((err) => {
                // Se der erro de CORS, libera a tela com o backup!
                console.warn("API bloqueou. Usando cardápio de backup.", err)
                setRestaurante(backupRestaurante)
            })
    }, [id])

    const abrirModal = (produto) => {
        setProdutoSelecionado(produto)
        setModalEstaAberto(true)
    }

    if (!restaurante) {
        return <h2 style={{ textAlign: 'center', marginTop: '100px', color: '#E66767' }}>Carregando cardápio...</h2>
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

            <Hero backgroundImage={restaurante.capa} category={restaurante.tipo} title={restaurante.titulo} />

            <ProductList>
                {restaurante.cardapio.map((produto) => (
                    <ProductCard
                        key={produto.id}
                        image={produto.foto}
                        title={produto.nome}
                        description={produto.descricao}
                        onClick={() => abrirModal(produto)}
                    />
                ))}
            </ProductList>

            <Modal className={modalEstaAberto ? 'visivel' : ''}>
                <ModalContent>
                    <img src="/imagens/fechar.png" alt="Fechar" className="close-icon" onClick={() => setModalEstaAberto(false)} />
                    {produtoSelecionado && (
                        <>
                            <ModalImage src={produtoSelecionado.foto} alt={produtoSelecionado.nome} />
                            <ModalInfos>
                                <h4>{produtoSelecionado.nome}</h4>
                                <p>
                                    {produtoSelecionado.descricao}
                                    <br /><br /> Serve: {produtoSelecionado.porcao}
                                </p>
                                <button>Adicionar ao carrinho - R$ {produtoSelecionado.preco}</button>
                            </ModalInfos>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Footer />
        </PerfilContainer>
    )
}