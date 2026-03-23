import { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantCard from '../../Components/RestaurantCard'
import { HomeContainer, Hero, RestaurantList } from './styles'

export default function Home() {
    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => setRestaurantes(data))
            .catch((erro) => console.error("Erro ao carregar a API da EBAC", erro))
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