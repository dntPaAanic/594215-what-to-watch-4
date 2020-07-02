import films from './mocks/films.js';

const ALL_GENRES = `All genres`;
const GENRES_MAX_COUNT = 9;

const FilmsCount = {
  ON_START: 8,
  BY_BUTTON_CLICK: 8
};

const genres = [...new Set(films.map((film) => film.genre))].slice(0, GENRES_MAX_COUNT).sort();
const allGenres = [ALL_GENRES, ...genres];

const initialState = {
  filterType: ALL_GENRES,
  smallMovieCards: films,
  filterGenres: allGenres,
  showingCards: FilmsCount.ON_START
};

const ActionType = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  GET_FILTERED_MOVIE_LIST: `GET_FILTERED_MOVIE_LIST`,
  INCREMENT_SHOWING_CARDS: `INCREMENT_SHOWING_CARDS`,
};

const getFilteredMovies = (movies, filterType) => {
  if (filterType !== ALL_GENRES) {
    return movies.filter((movie) => movie.genre === filterType);
  }

  return movies;
};

const ActionCreator = {
  changeGenreFilter: (filterType) => ({type: ActionType.GENRE_CHANGE, filterType}),
  getFilteredSmallMovieCards: (filterType) => ({type: ActionType.GET_FILTERED_MOVIE_LIST, payload: getFilteredMovies(films, filterType)}),
  incrementShowingCards: () => ({type: ActionType.INCREMENT_SHOWING_CARDS, payload: FilmsCount.BY_BUTTON_CLICK}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_CHANGE:
      return Object.assign({}, state, {filterType: action.filterType});

    case ActionType.GET_FILTERED_MOVIE_LIST:
      return Object.assign({}, state, {smallMovieCards: action.payload});

    case ActionType.INCREMENT_SHOWING_CARDS:
      return Object.assign({}, state, {showingCards: state.showingCards + action.payload});

  }

  return state;
};

export {reducer, ActionType, ActionCreator};
