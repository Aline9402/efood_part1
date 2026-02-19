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



export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Fundo preto transparente */
  z-index: 1000; /* Fica por cima de tudo */
  
  /* O React vai trocar a classe para mostrar ou esconder o modal */
  display: ${props => props.className === 'visivel' ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: #E66767;
  max-width: 1024px;
  padding: 32px;
  display: flex;
  gap: 24px;
  position: relative;
  
  /* Botão de fechar (X) */
  .close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: #FFFFFF;
    font-size: 21px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    color: #FFFFFF;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    padding: 6px 14px;
    font-weight: 900;
    font-size: 14px;
    cursor: pointer;
    width: fit-content; /* O botão abraça o texto */
  }
`