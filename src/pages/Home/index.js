import React, { useEffect, useState } from 'react';
import api from '../../services/marvelApi';
import params from '../../services/marvelParams';

import { Container, Search, List, More } from './styles';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [herosList, setHerosList] = useState([]);
  const [filter, setFilter] = useState({ search: '', page: 1, limit: 12 });
  const [endList, setEndList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTimeout, setSearchTimeout] = useState();
  const getHeros = async () => {
    setLoading(true);
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
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (searchTimeout) clearTimeout(searchTimeout);
      setSearchTimeout(
        setTimeout(() => {
          getHeros();
        }, 1000)
      );
    }
    setIsMounted(true);
  }, [filter]);

  return (
    <Container>
      <div>HERÓIS</div>
      <Search
        onChange={(e) => {
          setFilter({ ...filter, page: 1, search: e.target.value });
        }}
        placeholder="Procurar"
      />
      <List>
        {herosList &&
          herosList.map((hero) => (
            <Card
              key={hero.id.toString()}
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
    </Container>
  );
}
