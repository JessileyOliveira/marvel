import React from 'react';

import { Container, SearchContainer, Search } from './styles';

export default function Home() {
  return (
    <Container>
      <SearchContainer data-testid="searchContainer">
        <Search placeholder="Procurar" />
      </SearchContainer>
    </Container>
  );
}
