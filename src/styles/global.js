import { createGlobalStyle } from 'styled-components';
import marvel from '../assets/images/marvel.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #e71c22;
    -webkit-font-smoothing: antialiased !important;
    background-image: url(${marvel});
  }
`;
