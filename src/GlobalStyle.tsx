import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;
  }

  li {
    list-style: none;
  }

  button { 
    cursor: pointer;
  }
`;

export default GlobalStyle;
