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

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((data) => setRestaurante(data))
            .catch((error) => console.error('Erro na API:', error))
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