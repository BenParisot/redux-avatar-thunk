import { getCharacters } from '../services/lastAirbenderApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';


export const fetchCharacters = () => dispatch => {
  return getCharacters()
    .then(results => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: results
      });
    });
};
