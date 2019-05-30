import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map(character => (
    <li key={character._id}>
      <Character photoUrl={character.photoUrl} name={character.name} _id={character._id} />
    </li>
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
