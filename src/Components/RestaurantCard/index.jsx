import { Link } from 'react-router-dom' // <-- Adicionado aqui
import {
    Card,
    Infos,
    Tag,
    Image,
    Content,
    Line,
    Title,
    Rating,
    Description,
    Button
} from './styles'

const RestaurantCard = ({ title, category, description, image, rating, destacado, id }) => {
    return (
        <Card>
            <Infos>
                {destacado && <Tag>Destaque da semana</Tag>}
                <Tag>{category}</Tag>
            </Infos>

            <Image src={image} alt={title} />

            <Content>
                <Line>
                    <Title>{title}</Title>
                    <Rating>
                        <span>{rating}</span>
                        <span>⭐</span>
                    </Rating>
                </Line>

                <Description>{description}</Description>

                {/* <-- Caminho corrigido para /restaurante/ e usando react-router --> */}
                <Button as={Link} to={`/restaurante/${id}`}>Saiba mais</Button>
            </Content>
        </Card>
    )
}

export default RestaurantCard