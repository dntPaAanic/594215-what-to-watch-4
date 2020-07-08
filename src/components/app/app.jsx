import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {SIMILAR_FILMS_COUNT} from '../../helpers/const.js';
import {ActionCreator} from '../../reducer/films/films.js';
import {getFilteredMovies, getCurrentMovie, isFullPlayerVisible} from "../../reducer/films/selectors.js";

const MoviePageWrapped = withActiveItem(MoviePage);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {films, onCardClick, currentMovie, isFullVideoPlayerVisible, onVisibilityChange} = this.props;

    if (currentMovie >= 0) {
      const selectedMovie = films.find((film) => film.id === currentMovie);
      const similarFilms = films.filter((film) => film.id !== currentMovie && film.genre === selectedMovie.genre);
      return (
        <MoviePageWrapped
          film={selectedMovie}
          similarFilms={similarFilms}
          onCardClick={onCardClick}
          isFullVideoPlayerVisible={isFullVideoPlayerVisible}
          onVisibilityChange={onVisibilityChange}
        />
      );
    }

    return (
      <Main
        films={films}
        onCardClick={onCardClick}
        isFullVideoPlayerVisible={isFullVideoPlayerVisible}
        onVisibilityChange={onVisibilityChange}
      />
    );
  }

  render() {
    const {films, onCardClick, isFullVideoPlayerVisible, onVisibilityChange} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePageWrapped
              film={films[0]}
              similarFilms={films.slice(0, SIMILAR_FILMS_COUNT)}
              onCardClick={onCardClick}
              isFullVideoPlayerVisible={isFullVideoPlayerVisible}
              onVisibilityChange={onVisibilityChange}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePreview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    imagePoster: PropTypes.string.isRequired,
    imageBackground: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    previewSrc: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired
  })).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  currentMovie: PropTypes.number.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilteredMovies(state),
  currentMovie: getCurrentMovie(state),
  isFullVideoPlayerVisible: isFullPlayerVisible(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(id) {
    dispatch(ActionCreator.setMovieCardId(id));
  },
  onVisibilityChange() {
    dispatch(ActionCreator.changeVisibility());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
