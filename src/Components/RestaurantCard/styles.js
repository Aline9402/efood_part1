import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  border: 1px solid #E66767; /* A borda no Figma costuma ser 1px */
  position: relative; /* Essencial para a Tag flutuar */
  margin-bottom: 48px;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`


export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: flex;
  gap: 8px; /* Espaço entre as tags */
`

export const Tag = styled.div`
  background-color: #E66767;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 6px 10px;
  display: inline-block;
`

export const Content = styled.div`
  padding: 8px;
  border-top: 1px solid transparent;
`


export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  color: #E66767;
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #E66767;
  font-weight: bold;
  font-size: 18px;

  img {
    margin-left: 8px;
  }
`

export const Description = styled.p`
  color: #E66767;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  display: block;
`

export const Button = styled.button` // Ou styled(Link) se usar react-router
  background-color: #E66767;
  color: #fff;
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`