import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withActiveItem from '../../hocs/with-acrive-item.js';
import {SIMILAR_FILMS_COUNT} from '../../helpers/const.js';
import {ActionCreator} from '../../reducer.js';

const MoviePageWrapped = withActiveItem(MoviePage);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {title, genre, releaseDate, films, onCardClick, currentMovie} = this.props;

    if (currentMovie >= 0) {
      const selectedMovie = films.find((film) => film.id === currentMovie);
      // const similarFilms = films.filter((film) => film.genre === films[currentMovie].genre && film.id !== currentMovie).slice(0, SIMILAR_FILMS_COUNT);
      // const similarFilms = films.filter((film) => film.id !== currentMovie && film.genre === selectedMovie.genre);
      const similarFilms = films.filter((film) => film.id !== currentMovie);

      return (
        <MoviePageWrapped
          film={selectedMovie}
          similarFilms={similarFilms}
          onCardClick={onCardClick}
        />
      );
    }

    return (
      <Main
        title={title}
        genre={genre}
        releaseDate={releaseDate}
        films={films}
        onCardClick={onCardClick}
      />
    );
  }

  render() {
    const {films, onCardClick} = this.props;

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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
  currentMovie: PropTypes.number.isRequired,
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
  })).isRequired
};

const mapStateToProps = (state) => ({
  films: state.smallMovieCards,
  currentMovie: state.currentMovie
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(id) {
    dispatch(ActionCreator.setMovieCardId(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
