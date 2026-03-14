import { useState, useEffect } from 'react' 
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantCard from '../../Components/RestaurantCard'
import { HomeContainer, Hero, RestaurantList } from './styles'

export default function Home() {
    const [restaurantes, setRestaurantes] = useState([])

    // É ISSO AQUI QUE O TUTOR QUER VER NO SEU CÓDIGO:
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => setRestaurantes(data))
            .catch((error) => console.error('Erro na API:', error))
    }, [])

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