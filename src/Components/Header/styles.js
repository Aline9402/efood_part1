import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-image: url('/imagens/fundo.png');
  background-repeat: repeat;
  background-color: #FFEBD9;
  padding: 64px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 125px;
    margin-bottom: 138px;
  }

  h2 {
    color: #E66767;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    max-width: 540px;
    margin: 0 auto;
  }
`