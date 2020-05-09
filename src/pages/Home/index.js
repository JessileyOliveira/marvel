import React, { useEffect, useState } from 'react';
import api from '../../services/marvelApi';
import params from '../../services/marvelParams';

import {
  Container,
  SearchContainer,
  Search,
  ListContainer,
  List,
} from './styles';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

export default function Home() {
  const [herosList, setHerosList] = useState([]);
  const [filter, setFilter] = useState({ search: '', page: 1 });
  const [loading, setLoading] = useState(true);
  const getCharacters = async () => {
    const apiParans = {
      ts: params.ts,
      apikey: params.apikey,
      hash: params.hash,
      limit: 9,
      offset: filter.page === 1 ? 0 : (filter.page - 1) * filter.offset,
    };
    if (filter.search !== '') apiParans.nameStartsWith = filter.search;
    const response = await api.get(`/characters`, {
      params: apiParans,
    });
    setHerosList(response.data.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container>
      <SearchContainer data-testid="searchContainer">
        <Search placeholder="Procurar" />
      </SearchContainer>
      <ListContainer>
        <List>
          {herosList &&
            herosList.map((hero) => (
              <Card
                key={hero.id}
                id={hero.id}
                name={hero.name}
                image={hero.thumbnail}
              />
            ))}
        </List>
        {loading && <Loader />}
      </ListContainer>
    </Container>
  );
}
