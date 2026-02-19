import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantCard from '../../Components/RestaurantCard'
import { HomeContainer, Hero, HeroTitle, RestaurantList } from './styles'

export default function Home() {
    const restaurants = [
        {
            id: 1,
            image: '/imagens/produtos/imagem-2.png',
            destacado: true,
            title: 'La Dolce Vita Trattoria',
            category: 'Japonesa',
            rating: 4.9,
            description: 'A La Dolce Vita Trattoria oferece a experiência completa da culinária italiana. Ambiente aconchegante e staff atencioso.'
        },
        {
            id: 2,
            image: '/imagens/produtos/image-1.png',
            title: 'Sakura Sushi',
            category: 'Italiana',
            rating: 4.8,
            description: 'Peças de sushi fresco feitas diariamente. Ambiente moderno e acolhedor com vista para a cidade.'
        },
        {
            id: 3,
            image: '/imagens/produtos/image-1.png',
            title: 'Burger House',
            category: 'Italiana',
            rating: 4.7,
            description: 'Os melhores hambúrgueres artesanais da cidade. Ingredientes frescos e receitas exclusivas.'
        },
        {
            id: 4,
            image: '/imagens/produtos/image-1.png',
            title: 'Taj Mahal',
            category: 'Italiana',
            rating: 4.6,
            description: 'Autêntica culinária indiana com especiarias selecionadas. Pratos tradicionais e inovadores.'
        },
        {
        id: 5,
        image: '/imagens/produtos/image-1.png',
        title: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria oferece a experiência completa da culinária italiana. Ambiente aconchegante e staff atencioso.'
        },
                {
        id: 6,
        image: '/imagens/produtos/image-1.png',
        title: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        rating: 4.6,
        description: 'A La Dolce Vita Trattoria oferece a experiência completa da culinária italiana. Ambiente aconchegante e staff atencioso.'
        }
    ]

    return (
        <HomeContainer>
            <Header />
            <Hero>
            </Hero>
            <RestaurantList>
                {restaurants.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        image={restaurant.image}
                        title={restaurant.title}
                        category={restaurant.category}
                        rating={restaurant.rating}
                        description={restaurant.description}

                        destacado={restaurant.destacado}
                    />
                ))}
            </RestaurantList>
            <Footer />
        </HomeContainer>
    )
}