import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  console.log('detail character', character);
  return (
    <section>
      <h2>{character.name}</h2>
      <img src={character.photoUrl} />
    </section>
  );
}
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default CharacterDetail;
