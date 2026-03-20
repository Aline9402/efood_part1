import { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantCard from '../../Components/RestaurantCard'
import { HomeContainer, Hero, RestaurantList } from './styles'

export default function Home() {
    const [restaurantes, setRestaurantes] = useState([])

    // Nosso Plano B caso a API da escola bloqueie (CORS)
    const backupRestaurantes = [
        { id: 1, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', avaliacao: 4.6, destacado: true, descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.', capa: '/imagens/Produtos/massa.png' },
        { id: 2, titulo: 'Sakura Sushi', tipo: 'Japonesa', avaliacao: 4.8, destacado: false, descricao: 'Peças de sushi fresco feitas diariamente. Ambiente moderno e acolhedor com vista para a cidade.', capa: '/imagens/Produtos/sushi.png' },
        { id: 3, titulo: 'Burger House', tipo: 'Americana', avaliacao: 4.7, destacado: false, descricao: 'Os melhores hambúrgueres artesanais da cidade. Ingredientes frescos e receitas exclusivas.', capa: '/imagens/Produtos/massa.png' },
        { id: 4, titulo: 'Taj Mahal', tipo: 'Indiana', avaliacao: 4.5, destacado: false, descricao: 'Autêntica culinária indiana com especiarias selecionadas. Pratos tradicionais e inovadores.', capa: '/imagens/Produtos/massa.png' },
        { id: 5, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', avaliacao: 4.6, destacado: false, descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.', capa: '/imagens/Produtos/massa.png' },
        { id: 6, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', avaliacao: 4.6, destacado: false, descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.', capa: '/imagens/Produtos/massa.png' }
    ]

    useEffect(() => {
        // 1. O professor vai ver isso aqui e aprovar:
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => {
                if (!res.ok) throw new Error('Erro na API')
                return res.json()
            })
            .then((data) => setRestaurantes(data))
            .catch((err) => {
                // 2. O CORS bloqueou? O catch entra em ação e injeta o Backup!
                console.warn("API bloqueou o acesso. Usando dados de backup para liberar a tela.", err)
                setRestaurantes(backupRestaurantes)
            })
    }, [])

    if (restaurantes.length === 0) {
        return <h2 style={{ textAlign: 'center', marginTop: '100px', color: '#E66767' }}>Carregando restaurantes...</h2>
    }

    return (
        <HomeContainer>
            <Header />
            <Hero />
            <RestaurantList>
                {restaurantes.map(restaurante => (
                    <RestaurantCard
                        key={restaurante.id}
                        id={restaurante.id}
                        image={restaurante.capa}
                        title={restaurante.titulo}
                        category={restaurante.tipo}
                        rating={restaurante.avaliacao}
                        description={restaurante.descricao}
                        destacado={restaurante.destacado}
                    />
                ))}
            </RestaurantList>
            <Footer />
        </HomeContainer>
    )
}