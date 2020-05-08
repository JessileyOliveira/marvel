import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/Home';

describe('Home tests', () => {
  it('Should exist a input to search', () => {
    const { getByPlaceholderText, getByTestId } = render(<Home />);

    expect(getByTestId('searchContainer')).toContainElement(
      getByPlaceholderText('Procurar')
    );
  });
});
