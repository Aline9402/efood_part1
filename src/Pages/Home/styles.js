import styled from 'styled-components'

export const HomeContainer = styled.div``

export const Hero = styled.div`
  background-color: var(--secondary-color);
  padding: 40px 0;
  text-align: center;
`

export const HeroTitle = styled.h2`
  color: var(--primary-color);
  font-size: 36px;
  font-weight: bold;
`

export const RestaurantList = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  padding: 0 20px;
`