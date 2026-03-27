import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  .prices {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 40px;
    color: #FFEBD9;
    font-weight: 700;
    font-size: 14px;
  }

  > button {
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    width: 100%;
    padding: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: #FFEBD9;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: #E66767;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: #E66767;
    font-size: 14px;
  }

  button {
    background-image: url('/imagens/lixeira.png');
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`