import React, { PureComponent } from 'react';
import Characters from '../components/characters/Characters';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/fetchCharacter';
import { getCharacters, getCharactersLoading, getCharactersError } from '../selectors/character-selectors';

class AllCharacters extends PureComponent {
  static propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
      photoUrl: PropTypes.string,
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })).isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters, loading, error } = this.props;
    if(loading) return <h1>LOADING</h1>;
    else if(error) return error;
    return <Characters characters={characters} />;
  }
} 

const mapStateToProps = state => ({
  loading: getCharactersLoading(state),
  error: getCharactersError(state),
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
