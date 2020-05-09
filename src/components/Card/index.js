import React from 'react';

import { Container } from './styles';

function Card(props) {
  const { id, name, image } = props;
  return (
    <Container>
      <div>
        <span>Nome:</span> {name}
      </div>
      <div>{image}</div>
    </Container>
  );
}

export default Card;
