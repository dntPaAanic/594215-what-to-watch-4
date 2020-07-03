import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import withActiveItem from '../../hocs/with-acrive-item.js';
const MoviePageWrapped = withActiveItem(MoviePage);
import {SIMILAR_FILMS_COUNT} from '../../helpers/const.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSmallMovieCardClick = this._handleSmallMovieCardClick.bind(this);

    this.state = {
      currentMovie: null
    };
  }

  render() {
    const {films} = this.props;

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
              onCardClick={this._handleSmallMovieCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {title, genre, releaseDate, films} = this.props;
    const {currentMovie} = this.state;

    if (currentMovie !== null) {
      const similarFilms = films.filter((film) => film.genre === films[currentMovie].genre && film.id !== currentMovie).slice(0, SIMILAR_FILMS_COUNT);
      return (
        <MoviePageWrapped
          film={films[currentMovie]}
          similarFilms={similarFilms}
          onCardClick={this._handleSmallMovieCardClick}
        />
      );
    }

    return (
      <Main
        title={title}
        genre={genre}
        releaseDate={releaseDate}
        films={films}
        onCardClick={this._handleSmallMovieCardClick}
      />
    );
  }

  _handleSmallMovieCardClick(currentMovie) {
    this.setState({currentMovie});
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
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
});

export {App};
export default connect(mapStateToProps)(App);
