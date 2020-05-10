import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > a {
    text-decoration: none;
    text-align: center;
  }

  & > a > h3 {
    font-weight: bold;
    width: auto;
    color: #333;
    transition: color 0.4s;
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
