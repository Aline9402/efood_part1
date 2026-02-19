import styled from 'styled-components'

export const PerfilContainer = styled.div`
  background-color: #FFF8F2;
`

export const HeaderPerfil = styled.header`
background-image: url('/imagens/fundo.png');
  background-color: var(--secondary-color);
  padding: 40px 0;
  
  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  a, span {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  h1 {
    color: var(--primary-color);
    font-size: 32px;
  }
`

export const ProductList = styled.div`
  max-width: 1024px;
  margin: 56px auto 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 20px;
`