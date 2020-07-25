import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import withIsValid from '../../hocs/with-is-valid/with-is-valid';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getFilteredMovies, isAppLoading, getMainMovie} from '../../reducer/films/selectors';
import Preloader from '../preloader/preloader';
import {Operation as UserOperation} from '../../reducer/user/user';
import {Operation as CommentsOperation} from '../../reducer/comments/comments';
import history from '../../history';
import PrivateRoute from '../private-route/private-route';
import FullVideoPlayer from '../full-video-player/full-video-player';
import withFullPlayer from '../../hocs/with-full-player/with-full-player';
import {getMovieById, getSimilarFilms} from '../../helpers/utils';
import {isAuth} from '../../reducer/user/selectors';
import {Film} from '../../types';

const AddReviewWrapped = withIsValid(AddReview);
const MoviePageWrapped = withActiveItem(MoviePage);
const FullVideoPlayerWrapped = withFullPlayer(FullVideoPlayer);

type AppProps = {
  login: ({email, password}: {email: string; password: string}) => void;
  isAuthed: boolean;
  isLoading: boolean;
  films: Film[];
  mainMovie: Film;
  onCardClick: (id: number | string) => void;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
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
