import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > a {
    min-height: 493px;
    min-width: 300px;
    max-width: 300px;
    text-decoration: none;
    text-align: center;
    background: #fff;
    border-radius: 0px 0px 4px 4px;
    border-radius: 8px;
    -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
    -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
    box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  }

  & > a > h3 {
    font-weight: bold;
    color: #333;
    transition: color 0.4s;
    padding: 8px;
  }

  &:hover {
    & > a > h3 {
      color: #ff0000;
    }
  }

  & > div {
    margin-top: 4px;
  }

  & > div > img {
    border-radius: 4px;
    object-fit: cover;
  }
`;
