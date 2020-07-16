import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import withIsValid from '../../hocs/with-is-valid/with-is-valid.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {SIMILAR_FILMS_COUNT} from '../../helpers/const.js';
import {ActionCreator} from '../../reducer/films/films.js';
import {getFilteredMovies, getCurrentMovie, isFullPlayerVisible, isAppLoading} from '../../reducer/films/selectors.js';
import Preloader from '../preloader/preloader.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as CommentsOperation} from '../../reducer/comments/comments.js';
import history from '../../history.js';
import PrivateRoute from '../private-route/private-route.jsx';

const AddReviewWrapped = withIsValid(AddReview);
const MoviePageWrapped = withActiveItem(MoviePage);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onCardClick, isFullVideoPlayerVisible, onVisibilityChange, login, isLoading} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {isLoading
              ? <Preloader/>
              : <Main films={films} onCardClick={onCardClick} isFullVideoPlayerVisible={isFullVideoPlayerVisible} onVisibilityChange={onVisibilityChange} />}
          </Route>
          <Route exact path={`/films/:id`}
            render={(props) => {
              const currentMovie = Number(props.match.params.id);
              const selectedMovie = films.find((film) => film.id === currentMovie);
              const similarFilms = films.filter((film) => film.id !== currentMovie && film.genre === selectedMovie.genre).slice(0, SIMILAR_FILMS_COUNT);

              return isLoading
                ? <Preloader />
                : <MoviePageWrapped film={selectedMovie} similarFilms={similarFilms} onCardClick={onCardClick} isFullVideoPlayerVisible={isFullVideoPlayerVisible} onVisibilityChange={onVisibilityChange} />;

            }}
          />
          <Route exact path="/login">
            <SignIn onFormSubmit={login} />
          </Route>
          <PrivateRoute
            exact
            path={`/films/:id/review`}
            render={(props) => {
              const currentMovie = Number(props.match.params.id);
              const selectedMovie = films.find((film) => film.id === currentMovie);
              return <AddReviewWrapped film={selectedMovie} />;
            }}
          />
        </Switch>
      </Router>
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
  login: PropTypes.func.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  currentMovie: PropTypes.number.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilteredMovies(state),
  currentMovie: getCurrentMovie(state),
  isFullVideoPlayerVisible: isFullPlayerVisible(state),
  isLoading: isAppLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(id) {
    dispatch(ActionCreator.setMovieCardId(id));
    dispatch(CommentsOperation.getComments(id));
  },
  onVisibilityChange() {
    dispatch(ActionCreator.changeVisibility());
  },
  login(data) {
    dispatch(UserOperation.login(data));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
