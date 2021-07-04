export const getCharacters = state => state.characters.characters;
export const getCharactersLoading = state => state.characters.loading;
export const getCharactersError = state => state.characters.error;
export const getCharacter = (state, _id) => {
  return getCharacters(state)[state.characters.characters.findIndex(character => character._id === _id)];
};
