import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  padding: 40px 0;
  text-align: center;
  margin-top: 80px;
`

export const Logo = styled.h2`
  color: var(--primary-color);
  font-size: 24px;
  margin-bottom: 20px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 14px;
  }
`

export const Text = styled.p`
  color: var(--primary-color);
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
`