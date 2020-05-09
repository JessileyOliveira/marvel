import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

function Card(props) {
  const { id, name, image } = props;
  return (
    <Container>
      <Link to={`/hero/${id}`}>
        <h3>{name}</h3>
        <div>
          <img
            src={`${image.path}/standard_fantastic.${image.extension}`}
            alt={name}
          />
        </div>
      </Link>
    </Container>
  );
}

export default Card;
