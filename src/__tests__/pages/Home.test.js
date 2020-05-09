import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import Home from '../../pages/Home';

import api from '../../services/marvelApi';

const apiMock = new MockAdapter(api);

describe('Home tests', () => {
  afterEach(cleanup);
  it('Should exist a input to search', () => {
    apiMock.onGet(`/characters`).reply(200, { data: [] });
    const { getByPlaceholderText, getByTestId } = render(<Home />);

    expect(getByTestId('searchContainer')).toContainElement(
      getByPlaceholderText('Procurar')
    );
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
});
