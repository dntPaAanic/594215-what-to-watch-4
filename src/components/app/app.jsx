import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import withIsValid from '../../hocs/with-is-valid/with-is-valid.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {getFilteredMovies, isAppLoading, getMainMovie} from '../../reducer/films/selectors.js';
import Preloader from '../preloader/preloader.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as CommentsOperation} from '../../reducer/comments/comments.js';
import history from '../../history.js';
import PrivateRoute from '../private-route/private-route.jsx';
import FullVideoPlayer from '../full-video-player/full-video-player.jsx';
import withFullPlayer from '../../hocs/with-full-player/with-full-player.js';
import {getMovieById, getSimilarFilms} from '../../helpers/utils.js';
import {isAuth} from '../../reducer/user/selectors.js';

const AddReviewWrapped = withIsValid(AddReview);
const MoviePageWrapped = withActiveItem(MoviePage);
const FullVideoPlayerWrapped = withFullPlayer(FullVideoPlayer);

const App = (props) => {
  const {films, onCardClick, login, isLoading, mainMovie, isAuthed} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`/`}
          render={() => isLoading
            ? <Preloader/>
            : <Main films={films} onCardClick={onCardClick} mainMovie={mainMovie} />}
        />

        <Route exact path={`/films/:id`}
          render={(routerProps) =>
            isLoading
              ? <Preloader />
              : <MoviePageWrapped film={getMovieById(routerProps, films)} similarFilms={getSimilarFilms(routerProps, films)} onCardClick={onCardClick} />
          }
        />
        <Route exact path={`/login`}
          render={() => isAuthed ? history.push(`/`) : <SignIn onFormSubmit={login} />}
        />
        <Route exact path={`/player/:id`}
          render={(routerProps) =>
            isLoading
              ? <Preloader/>
              : <FullVideoPlayerWrapped onExitButtonClick = {routerProps.history.goBack} film = {getMovieById(routerProps, films) || mainMovie} autoPlay = {true} muted = {false}/>}
        />
        <PrivateRoute exact path={`/films/:id/review`}
          render={(routerProps) =>
            <AddReviewWrapped film={getMovieById(routerProps, films)} />
          }
        />
        <PrivateRoute
          exact path={`/mylist`}
          render={() => (
            <MyList onCardClick={onCardClick} />
          )}
        />
      </Switch>
    </Router>

  );
};

App.propTypes = {
  mainMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePreview: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
    imagePoster: PropTypes.string,
    imageBackground: PropTypes.string,
    ratingScore: PropTypes.number,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    previewSrc: PropTypes.string,
    runTime: PropTypes.number
  }).isRequired,
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
  isLoading: PropTypes.bool.isRequired,
  isAuthed: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilteredMovies(state),
  mainMovie: getMainMovie(state),
  isLoading: isAppLoading(state),
  isAuthed: isAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(id) {
    dispatch(CommentsOperation.getComments(id));
  },
  login(data) {
    dispatch(UserOperation.login(data));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
