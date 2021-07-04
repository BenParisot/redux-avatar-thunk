import { connect } from 'react-redux';
import CharacterDetail from '../components/characters/CharacterDetail';
import { getCharacter } from '../selectors/character-selectors';

const mapStateToProps = (state, props) => ({
  character: getCharacter(state, props.match.params._id)
});

export default connect(
  mapStateToProps
)(CharacterDetail);
