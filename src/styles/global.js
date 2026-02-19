import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #FFF8F2;
}

:root {
    --primary-color: #E66767;
    --secondary-color: #FFEBD9;
    --text-color: #E66767;
    --bg-color: #FFF8F2;
}
`