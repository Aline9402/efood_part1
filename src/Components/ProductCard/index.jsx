import { Card, Imagem, Titulo, Descricao, Botao } from './styles'

// Adicionando a propriedade onClick aqui em cima:
export default function ProductCard({ image, title, description, onClick }) {
  return (
    <Card>
      <Imagem src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      
      {/* Colocando o evento de clique e mudando o texto: */}
      <Botao onClick={onClick}>Mais detalhes</Botao>
    </Card>
  )
}