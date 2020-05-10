import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Card(props) {
  const { id, name, image } = props;
  return (
    <Container>
      <Link to={`/hero/${id}`}>
        <img
          data-testid="cardImage"
          src={`${image.path}/portrait_uncanny.${image.extension}`}
          alt={name}
        />
        <h3>{name}</h3>
      </Link>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    extension: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

export default Card;
