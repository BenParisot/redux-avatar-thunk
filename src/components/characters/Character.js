import React from 'react';
import PropTypes from 'prop-types';

function Character({ photoUrl, name }) {
  return (
    <>
      <p>{name}</p>
      <img src={photoUrl} />
    </>
  );
}

Character.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Character;
