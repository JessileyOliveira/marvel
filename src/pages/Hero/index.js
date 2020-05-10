import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/marvelApi';
import params from '../../services/marvelParams';
import Loader from '../../components/Loader';

import { Container, ImageHero, DescriptionConatiner, More } from './styles';

export default function Hero() {
  const { heroId } = useParams();
  const history = useHistory();
  const [endList, setEndList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSerie, setLoadingSerie] = useState(false);
  const [page, setPage] = useState(1);
  const [hero, setHero] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const getHero = async () => {
    setLoading(true);
    const apiParans = {
      ts: params.ts,
      apikey: params.apikey,
      hash: params.hash,
    };
    const response = await api.get(`/characters/${heroId}`, {
      params: apiParans,
    });
    setHero(response.data.data.results[0]);
    if (
      response.data.data.results[0].series.available <=
      response.data.data.results[0].series.returned
    ) {
      setEndList(true);
    }

    setLoading(false);
  };

  const getSeries = async () => {
    setLoadingSerie(true);
    const limit = 20;
    const apiParans = {
      ts: params.ts,
      apikey: params.apikey,
      hash: params.hash,
      limit,
      offset: page === 1 ? 0 : (page - 1) * limit,
    };
    const response = await api.get(`/characters/${heroId}/series`, {
      params: apiParans,
    });

    if (response.data.data.count < response.data.data.limit) setEndList(true);
    const series = hero.series.items;
    response.data.data.results.forEach((serie) => {
      series.push({
        name: serie.title,
        resourceURI: serie.resourceURI,
      });
    });
    const heroWithNewSeries = hero;
    heroWithNewSeries.series.items = series;
    setHero(heroWithNewSeries);

    setLoadingSerie(false);
  };

  useEffect(() => {
    getHero();
  }, []);

  useEffect(() => {
    if (isMounted) getSeries();
    setIsMounted(true);
  }, [page]);

  const handleVoltar = () => {
    history.goBack();
  };
  return (
    <Container>
      {hero.id && (
        <div>
          <ImageHero
            data-testid="heroImg"
            src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
            alt={hero.name}
          />
          <DescriptionConatiner>
            <div id="name">
              <h2>{hero.name}</h2>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <span onClick={handleVoltar} role="button" tabIndex={0}>
                Voltar
              </span>
            </div>
            <h3>Séries de quadrinho:</h3>
            <ol data-testid="seriesList">
              {hero.series.items.map((serie) => (
                <li key={serie.name}>{serie.name}</li>
              ))}
            </ol>
            {loadingSerie && <Loader width={28} border={4} />}
            {!loadingSerie &&
              !loading &&
              (endList ? (
                <More end="true">Sem mais Séries!</More>
              ) : (
                <More
                  onClick={() => {
                    setLoadingSerie(true);
                    setPage(page + 1);
                  }}
                >
                  Carregar mais
                </More>
              ))}
          </DescriptionConatiner>
        </div>
      )}
      {loading && <Loader />}
    </Container>
  );
}
