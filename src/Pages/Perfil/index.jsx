import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductCard from '../../Components/ProductCard'
import { PerfilContainer, HeaderPerfil, ProductList } from './styles'

export default function Perfil() {
    const restaurant = {
        title: 'La Dolce Vita Trattoria',
        category: 'Italiana',
        backgroundImage: '/imagens/fundo-perfil.png', 
        products: [
            { id: 1, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/restaurantes/image-3.png' },
            { id: 2, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/restaurantes/image-3.png' },
            { id: 3, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/restaurantes/image-3.png' },
            { id: 4, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/restaurantes/image-3.png' },
            { id: 5, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/restaurantes/image-3.png' },
            { id: 6, title: 'Pizza Marguerita', description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.', image: '/imagens/restaurantes/image-3.png' }
        ]
    }

    return (
        <PerfilContainer>
            {/* O Header específico da página de Perfil */}
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

            {/* A lista de produtos que vai virar um Grid */}
            <ProductList>
                {restaurant.products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </ProductList>

            <Footer />
        </PerfilContainer>
    )
}