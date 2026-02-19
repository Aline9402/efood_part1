import styled from 'styled-components'

export const HeroContainer = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1;
  }


  .container {
    position: relative;
    z-index: 2; 
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Empurra um texto para o topo e outro para o fundo */
    padding: 24px 0 32px 0; /* O espaçamento do topo e de baixo */
  }
`

export const Categoria = styled.p`
  font-weight: 100; /* Fonte mais fina */
  font-size: 32px;
  color: #FFFFFF; /* Branco */
`

export const Titulo = styled.h2`
  font-weight: 900; /* Fonte grossa */
  font-size: 32px;
  color: #FFFFFF; /* Branco */
`