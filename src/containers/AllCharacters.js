import React, { PureComponent } from 'react';
import Characters from '../components/characters/Characters';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/fetchCharacter';
import { getCharacters } from '../selectors/character-selectors';

class AllCharacters extends PureComponent {
  static propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })).isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    console.log('component did mount');
    this.props.fetch();
    console.log('characters array', this.props.characters);
  }

  render() {
    const { characters } = this.props;
    return <Characters characters={characters} />;
  }
} 

const mapStateToProps = state => ({
  characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
