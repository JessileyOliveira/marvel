import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 12px auto 0px auto;
  padding: 12px;

  & > div:nth-child(1) {
    width: 100%;
    font-size: 42px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding-bottom: 4px;
    margin-bottom: 4px;
    text-shadow: -6px 6px 8px black;
  }
`;

export const Search = styled.input`
  width: 100%;
  background: none;
  border: 1px solid #ccc;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 0.25rem;
  margin: 12px 0px;

  &::placeholder {
    color: #fff;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 28px;
  grid-column-gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const More = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: ${(props) => (props.end ? 'default' : 'pointer')};
  padding: 12px;
  transition: color 0.4s;

  &:hover {
    color: ${(props) => (props.end ? '#fff' : '#aaa')};
  }
`;
