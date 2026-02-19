import styled from 'styled-components'

export const Card = styled.div`
  background-color: #E66767; /* Cor de fundo vermelha */
  padding: 8px; /* Espaçamento interno padrão do layout */
  position: relative;
`

export const Imagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const Titulo = styled.h3`
  color: #FFEBD9; /* Cor da letra bege */
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: #FFEBD9; /* Cor da letra bege */
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  background-color: #FFEBD9; /* Fundo do botão bege */
  color: #E66767; /* Letra do botão vermelha */
  border: none;
  width: 100%; /* Botão ocupa a largura toda do card */
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`