import { createGlobalStyle } from 'styled-components';
import marvel from '../assets/images/marvel.png';
import Robotottf from '../assets/fonts/Roboto/Roboto-Regular.ttf';

export default createGlobalStyle`


@font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${Robotottf}) format('trueType');
        font-weight: 300;
        font-style: normal;
    }

  *{
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    padding: 0px 12px;
    background: #e71c22;
    -webkit-font-smoothing: antialiased !important;
    background-image: url(${marvel});
  }
`;
