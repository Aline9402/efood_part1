import { HeroContainer, Categoria, Titulo } from './styles'

export default function Hero({ backgroundImage, category, title }) {
    return (
        // Passamos a imagem por style inline. É a forma mais garantida de funcionar no React!
        <HeroContainer style={{ backgroundImage: `url('${backgroundImage}')` }}>
            
            {/* O container serve para alinhar o texto com o Header */}
            <div className="container">
                <Categoria>{category}</Categoria>
                <Titulo>{title}</Titulo>
            </div>
            
        </HeroContainer>
    )
}