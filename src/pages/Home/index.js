import React, { useEffect, useState } from 'react';
import api from '../../services/marvelApi';
import params from '../../services/marvelParams';

import {
  Container,
  SearchContainer,
  Search,
  ListContainer,
  List,
  More,
} from './styles';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

export default function Home() {
  const [herosList, setHerosList] = useState([]);
  const [filter, setFilter] = useState({ search: '', page: 1, limit: 15 });
  const [endList, setEndList] = useState(false);
  const [loading, setLoading] = useState(true);
  const getHeros = async () => {
    const apiParans = {
      ts: params.ts,
      apikey: params.apikey,
      hash: params.hash,
      limit: filter.limit,
      offset: filter.page === 1 ? 0 : (filter.page - 1) * filter.limit,
    };
    if (filter.search !== '') apiParans.nameStartsWith = filter.search;
    const response = await api.get(`/characters`, {
      params: apiParans,
    });
    console.log(response.data);
    if (response.data.data.count < response.data.data.limit) setEndList(true);
    if (filter.page === 1) {
      setHerosList(response.data.data.results);
    } else {
      setHerosList([...herosList, ...response.data.data.results]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getHeros();
  }, [filter]);

  return (
    <Container>
      <SearchContainer data-testid="searchContainer">
        <Search placeholder="Procurar" />
      </SearchContainer>
      <ListContainer>
        <h1>Heróis</h1>
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
        {!loading &&
          (endList ? (
            <More end="true">Sem mais heróis!</More>
          ) : (
            <More
              onClick={() => {
                setLoading(true);
                setFilter({ ...filter, page: filter.page + 1 });
              }}
            >
              Carregar mais
            </More>
          ))}
      </ListContainer>
    </Container>
  );
}
