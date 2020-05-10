import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';

import Card from '../../components/Card';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('Card tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should exist a aame and image', async () => {
    const objectCard = {
      id: 123,
      name: 'Abyss',
      thumbnail: {
        extension: 'jpg',
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      },
    };
    const { getByText, getByTestId } = render(
      <Card
        name={objectCard.name}
        id={objectCard.id}
        image={objectCard.thumbnail}
      />
    );

    await waitFor(() => {
      expect(getByText('Abyss')).toBeDefined();
      const image = getByTestId('cardImage');
      expect(image).toHaveAttribute('src');
      expect(image.src).toBe(
        `${objectCard.thumbnail.path}/standard_fantastic.${objectCard.thumbnail.extension}`
      );
    });
  });
});
