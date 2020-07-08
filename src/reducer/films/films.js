import Film from '../../models/film.js';

const ALL_GENRES = `All genres`;
const FilmsCount = {
  ON_START: 8,
  BY_BUTTON_CLICK: 8
};

const initialState = {
  movieCards: [],
  mainMovie: {},
  filterType: ALL_GENRES,
  showingCards: FilmsCount.ON_START,
  currentMovie: -1,
  isFullVideoPlayerVisible: false
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  GENRE_CHANGE: `GENRE_CHANGE`,
  INCREMENT_SHOWING_CARDS: `INCREMENT_SHOWING_CARDS`,
  SET_MOVIE_CARD_ID: `SET_MOVIE_CARD_ID`,
  CHANGE_VISIBILITY: `CHANGE_VISIBILITY`,
  LOAD_MAIN_MOVIE: `LOAD_MAIN_MOVIE`
};

const ActionCreator = {
  loadFilms: (films) => ({type: ActionType.LOAD_FILMS, payload: films}),
  loadMainMovie: (film) => ({type: ActionType.LOAD_MAIN_MOVIE, payload: film}),
  changeGenreFilter: (filterType) => ({type: ActionType.GENRE_CHANGE, filterType}),
  incrementShowingCards: () => ({type: ActionType.INCREMENT_SHOWING_CARDS, payload: FilmsCount.BY_BUTTON_CLICK}),
  setMovieCardId: (id) => ({type: ActionType.SET_MOVIE_CARD_ID, payload: id}),
  changeVisibility: () => ({type: ActionType.CHANGE_VISIBILITY}),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => response.data)
      .then(Film.parseFilms)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response));
      });
  },
  loadMainMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => response.data)
      .then(Film.parseFilm)
      .then((response) => {
        dispatch(ActionCreator.loadMainMovie(response));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {movieCards: action.payload});

    case ActionType.GENRE_CHANGE:
      return Object.assign({}, state, {filterType: action.filterType});

    case ActionType.INCREMENT_SHOWING_CARDS:
      return Object.assign({}, state, {showingCards: state.showingCards + action.payload});

    case ActionType.SET_MOVIE_CARD_ID:
      return Object.assign({}, state, {currentMovie: action.payload});

    case ActionType.CHANGE_VISIBILITY:
      return Object.assign({}, state, {isFullVideoPlayerVisible: !state.isFullVideoPlayerVisible});

    case ActionType.LOAD_MAIN_MOVIE:
      return Object.assign({}, state, {mainMovie: action.payload});

  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
