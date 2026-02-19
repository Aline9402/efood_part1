import { Card, Imagem, Titulo, Descricao, Botao } from './styles'

export default function ProductCard({ image, title, description }) {
  return (
    <Card>
      <Imagem src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Card>
  )
}