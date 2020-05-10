import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  background: #fff;
  margin: 12px auto;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);

  & > div {
    width: 100%;
    display: flex;
  }

  @media (max-width: 680px) {
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ImageHero = styled.img`
  border-radius: 4px;
  object-fit: cover;
  max-height: 450px;

  @media (max-width: 680px) {
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const DescriptionConatiner = styled.div`
  width: 100%;
  padding: 0px 8px;
  display: flex;
  flex-direction: column;

  & > #name {
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (max-width: 680px) {
    & > #name {
      margin-top: 8px;
    }
  }

  & > #name > span {
    color: #e71c22;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.4s;
  }

  & > #name > span:hover {
    color: #000;
  }

  & > h3 {
    width: 100%;
    margin-top: 8px;
  }

  & > ul {
    width: 100%;
    margin-left: 8px;
    list-style-type: '- ';
  }

  & > ul > li {
    padding: 4px;
    border-bottom: 1px solid #eee;
  }
`;

export const More = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #aaa;
  cursor: ${(props) => (props.end ? 'default' : 'pointer')};
  padding: 8px;
  border-bottom: 1px solid #eee;
  transition: color 0.4s;

  &:hover {
    color: ${(props) => (props.end ? '#aaa' : '#e71d23')};
  }
`;
