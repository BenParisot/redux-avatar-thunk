import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_ERROR } from '../actions/fetchCharacter';
import { PENDING, REJECTED } from 'promise-middleware-redux';

const initialState = {
  loading: false,
  error: null,
  characters: []
};

export default function characterReducer(state = initialState, action) {
  switch(action.type) {
    case PENDING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, loading: false, characters: action.payload };
    case REJECTED:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
