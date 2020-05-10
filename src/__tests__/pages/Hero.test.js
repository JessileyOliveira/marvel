import React from 'react';
import { render, waitFor, cleanup, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import Hero from '../../pages/Hero';

import api from '../../services/marvelApi';

const apiMock = new MockAdapter(api);

function route(path = '') {
  return typeof path === 'string'
    ? new RegExp(path.replace(/:\w+/g, '[^/]+'))
    : path;
}

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue(1),
  useHistory: jest.fn().mockReturnValue(() => {}),
}));

const getMock = () => {
  const getData = {
    count: 1,
    limit: 1,
    offset: 0,
    results: [
      {
        description: '',
        id: 1009148,
        name: 'Absorbing Man',
        series: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1009148/series',
          items: [
            {
              name: 'A+X (2012 - 2014)',
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            },
          ],
          returned: 1,
        },
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
          extension: 'jpg',
        },
      },
    ],
    total: 1,
  };
  return apiMock
    .onGet(route('/characters/:heroId'))
    .reply(200, { data: getData });
};

describe('Hero tests', () => {
  afterEach(() => {
    cleanup();
    apiMock.reset();
  });

  it('Should exist a img and name', async () => {
    getMock();
    const { getByText, getByTestId } = render(<Hero />);

    await waitFor(() => {
      expect(getByText('Absorbing Man')).toBeDefined();
      const image = getByTestId('heroImg');
      expect(image).toHaveAttribute('src');
      expect(image.src).toBe(
        `http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7/portrait_uncanny.jpg`
      );
    });
  });

  it('Should exist a element with text "valotar', async () => {
    getMock();
    const { getByText } = render(<Hero />);

    await waitFor(() => {
      expect(getByText('Voltar')).toBeDefined();
    });
  });

  it('Should exist a list when the api returns', async () => {
    getMock();

    const { getByText, getByTestId } = render(<Hero />);

    await waitFor(() => {
      expect(getByTestId('seriesList')).toContainElement(
        getByText('A+X (2012 - 2014)')
      );
    });
  });

  it('Should exist a componet with text "Carregar mais" when exist more series', async () => {
    getMock();

    const { getByText } = render(<Hero />);

    await waitFor(() => {
      expect(getByText('Carregar mais')).toBeDefined();
    });
  });

  it('Should exist a componet with text "Sem mais Series!" when not exist more series', async () => {
    const getData = {
      count: 1,
      limit: 1,
      offset: 0,
      results: [
        {
          description: '',
          id: 1009148,
          name: 'Absorbing Man',
          series: {
            available: 1,
            collectionURI:
              'http://gateway.marvel.com/v1/public/characters/1009148/series',
            items: [
              {
                name: 'A+X (2012 - 2014)',
                resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              },
            ],
            returned: 1,
          },
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
            extension: 'jpg',
          },
        },
      ],
      total: 1,
    };
    apiMock.onGet(route('/characters/:heroId')).reply(200, { data: getData });

    const { getByText } = render(<Hero />);

    await waitFor(() => {
      expect(getByText('Sem mais Series!')).toBeDefined();
    });
  });

  it('Should exist a componet with text "Sem mais Series!" when not exist more series after click in "Carregar mais', async () => {
    getMock();

    const { getByText } = render(<Hero />);

    const carregarMais = await waitFor(() => getByText('Carregar mais'));
    apiMock.reset();
    const getData = {
      count: 1,
      limit: 20,
      offset: 20,
      results: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1468',
          title: 'Marvel Masterworks: Doctor Strange Vol. (2005)',
        },
      ],
      total: 2,
    };
    apiMock
      .onGet(route('/characters/:heroId/series'))
      .reply(200, { data: getData });

    await fireEvent.click(carregarMais);

    await waitFor(() => {
      expect(getByText('Sem mais Series!')).toBeDefined();
    });
  });

  it('Should load more heros on click in "carregar mais"', async () => {
    getMock();

    const { getByText, getByTestId } = render(<Hero />);

    const carregarMais = await waitFor(() => getByText('Carregar mais'));
    apiMock.reset();
    const getData = {
      count: 1,
      limit: 20,
      offset: 20,
      results: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1468',
          title: 'Marvel Masterworks: Doctor Strange Vol. (2005)',
        },
      ],
      total: 2,
    };
    apiMock
      .onGet(route('/characters/:heroId/series'))
      .reply(200, { data: getData });

    await fireEvent.click(carregarMais);

    await waitFor(() => {
      expect(getByTestId('seriesList')).toContainElement(
        getByText('A+X (2012 - 2014)')
      );
      expect(getByTestId('seriesList')).toContainElement(
        getByText('Marvel Masterworks: Doctor Strange Vol. (2005)')
      );
    });
  });
});
