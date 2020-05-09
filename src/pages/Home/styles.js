import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 12px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 12px 12px;
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

export const List = styled.div`
  width: 100%;
  background: #fff;
  margin: 12px 0px;
  padding: 12px 12px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
`;
