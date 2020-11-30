import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #EEF9F8;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Trocchi', serif;
    font-size: 18px;
  }
  h1, h2, h3, h4, h5, h6, p, strong {
    font-family: 'Sofia', cursive;
    font-size: 64px;
    color: #a884f4;
  }
  button {
    cursor: pointer;
  }
`;
