import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    font-size: 1.6rem;
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

  a{
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
