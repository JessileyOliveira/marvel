import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0px auto;
`;

export const SearchContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 12px;
  margin: 12px 0px;
  border-radius: 8px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
`;

export const Search = styled.input`
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

export const ListContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 12px;
  margin: 12px 0px;
  border-radius: 8px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);

  & > h1 {
    color: #222;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 12px;
  grid-column-gap: 12px;
  border-bottom: 1px solid #eee;

  @media (max-width: 852px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 578px) {
    grid-template-columns: 1fr;
  }

  & > div > a > img {
    margin-top: 8px;
  }
`;

export const More = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #aaa;
  cursor: ${(props) => (props.end ? 'default' : 'pointer')};
  padding: 12px;
  border-bottom: 1px solid #eee;
  transition: color 0.4s;

  &:hover {
    color: ${(props) => (props.end ? '#aaa' : '#e71d23')};
  }
`;
