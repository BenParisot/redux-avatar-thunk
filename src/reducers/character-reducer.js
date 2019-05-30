import { FETCH_CHARACTERS } from '../actions/fetchCharacter';

export default function characterReducer(state = [], action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}
