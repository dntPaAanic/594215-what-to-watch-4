import films from './mocks/films.js';

const ALL_GENRES = `All genres`;
const GENRES_MAX_COUNT = 9;

const genres = [...new Set(films.map((film) => film.genre))].slice(0, GENRES_MAX_COUNT).sort();
const allGenres = [ALL_GENRES, ...genres];

const initialState = {
  filterType: ALL_GENRES,
  smallMovieCards: films,
  filterGenres: allGenres
};

const ActionType = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  GET_FILTERED_MOVIE_LIST: `GET_FILTERED_MOVIE_LIST`,
};

const getFilteredMovies = (movies, filterType) => {
  if (filterType !== ALL_GENRES) {
    return movies.filter((movie) => movie.genre === filterType);
  }

  return movies;
};

const ActionCreator = {
  changeGenreFilter: (filterType) => ({type: ActionType.GENRE_CHANGE, filterType}),
  getFilteredSmallMovieCards: () => ({type: ActionType.GET_FILTERED_MOVIE_LIST}),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_CHANGE:
      return Object.assign({}, state, {filterType: action.filterType});

    case ActionType.GET_FILTERED_MOVIE_LIST:
      const filteredSmallMovieCards = getFilteredMovies(films, state.filterType);
      return Object.assign({}, state, {smallMovieCards: filteredSmallMovieCards});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
