import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

export default class App extends PureComponent {
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
            <MoviePage
              film={films[0]}
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
      return <MoviePage
        film={films[currentMovie]}
      />;
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
