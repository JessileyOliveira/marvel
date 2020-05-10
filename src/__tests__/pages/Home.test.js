import React from 'react';
import { render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import Home from '../../pages/Home';

import api from '../../services/marvelApi';

const apiMock = new MockAdapter(api);

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('Home tests', () => {
  afterEach(() => {
    cleanup();
    apiMock.reset();
  });

  it('Should exist a input to search', async () => {
    apiMock.onGet(`/characters`).reply(200, { data: [] });
    const { getByPlaceholderText, getByTestId } = render(<Home />);

    await waitFor(() => {
      expect(getByTestId('searchContainer')).toContainElement(
        getByPlaceholderText('Procurar')
      );
    });
  });

  it('Should exist a card when the api returns', async () => {
    const getData = {
      count: 1,
      limit: 1,
      offset: 0,
      results: [
        {
          id: 1009149,
          modified: '2014-04-29T14:10:43-0400',
          name: 'Abyss',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          },
        },
      ],
      total: 1,
    };

    apiMock.onGet(`/characters`).reply(200, { data: getData });

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Abyss')).toBeDefined();
    });
  });

  it('Should exist a componet with text "Carregar mais" when exist more heros', async () => {
    const getData = {
      count: 1,
      limit: 1,
      offset: 0,
      results: [
        {
          id: 1009149,
          modified: '2014-04-29T14:10:43-0400',
          name: 'Abyss',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          },
        },
      ],
      total: 1,
    };

    apiMock.onGet(`/characters`).reply(200, { data: getData });

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Carregar mais')).toBeDefined();
    });
  });

  it('Should exist a componet with text "Sem mais heróis" when not exist more heros', async () => {
    const getData = {
      count: 0,
      limit: 1,
      offset: 0,
      results: [],
      total: 1,
    };

    apiMock.onGet(`/characters`).reply(200, { data: getData });

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Sem mais heróis!')).toBeDefined();
    });
  });

  it('Should load more heros on click in "carregar mais"', async () => {
    const getData = {
      count: 1,
      limit: 1,
      offset: 0,
      results: [
        {
          id: 1009149,
          modified: '2014-04-29T14:10:43-0400',
          name: 'Abyss',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          },
        },
      ],
      total: 1,
    };

    apiMock.onGet(`/characters`).reply(200, { data: getData });

    const { getByText } = render(<Home />);
    const carregarMais = await waitFor(() => getByText('Carregar mais'));

    getData.results = [
      {
        id: 1009150,
        modified: '2014-04-29T14:10:43-0402',
        name: 'Abyss 2',
        thumbnail: {
          extension: 'jpg',
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        },
      },
    ];
    await fireEvent.click(carregarMais);

    await waitFor(() => {
      expect(apiMock.history.get.length).toBe(2);
      expect(getByText('Abyss')).toBeDefined();
      expect(getByText('Abyss 2')).toBeDefined();
    });
  });

  it('Should to be filter heros', async () => {
    const getData = {
      count: 1,
      limit: 1,
      offset: 0,
      results: [
        {
          id: 1009149,
          modified: '2014-04-29T14:10:43-0400',
          name: 'Abyss',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          },
        },
      ],
      total: 1,
    };

    apiMock.onGet(`/characters`).reply(200, { data: getData });

    const { getByPlaceholderText, getByText } = render(<Home />);

    getData.results = [
      {
        id: 1009149,
        modified: '2014-04-29T14:10:43-0400',
        name: 'America',
        thumbnail: {
          extension: 'jpg',
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        },
      },
    ];

    await fireEvent.change(getByPlaceholderText('Procurar'), {
      target: { value: 'Amer' },
    });

    await waitFor(() => {
      expect(apiMock.history.get.length).toBe(2);
      expect(getByText('America')).toBeDefined();
    });
  });
});
