import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`