import { FETCH_CHARACTERS } from '../actions/fetchCharacter';

export default function characterReducer(state = [], action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return [...state, { photoUrl: action.payload.photoUrl, name: action.payload.name, _id: action.payload._id }];
    default:
      return state;
  }
}
