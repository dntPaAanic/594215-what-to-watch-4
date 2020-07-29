import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, Operation} from './films';
import {films, film as movieMock} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

const api = createAPI(noop);

const FilmsCount = {
  ON_START: 8,
  BY_BUTTON_CLICK: 8
};

const ALL_GENRES = `All genres`;

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movieCards: [],
      mainMovie: {},
      filterType: ALL_GENRES,
      showingCards: FilmsCount.ON_START,
      isAppLoading: false
    });
  });

  it(`Reducer should should update movieCards by load films`, () => {
    expect(reducer({
      movieCards: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual({
      movieCards: films,
    });
  });

  it(`Reducer should update mainMovie by loadMainMovie`, () => {
    expect(reducer({
      mainMovie: {},
    }, {
      type: ActionType.LOAD_MAIN_MOVIE,
      payload: movieMock,
    })).toEqual({
      mainMovie: movieMock,
    });
  });

  it(`Reducer should correctly increment showingCardsCount by a given value`, () => {
    expect(reducer({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCards: 1
    }, {
      type: ActionType.INCREMENT_SHOWING_CARDS,
      payload: 1
    })).toEqual({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCards: 2
    });
  });

  it(`Reducer should correctly set main movie load state by a given value`, () => {
    expect(reducer({
      isAppLoading: false,
    }, {
      type: ActionType.SET_PRELOADER_STATE,
      payload: true
    })).toEqual({
      isAppLoading: true,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadFilms returns correct action`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films
    });
  });


  it(`Action creator for loadMainMovie returns correct action`, () => {
    expect(ActionCreator.loadMainMovie(movieMock)).toEqual({
      type: ActionType.LOAD_MAIN_MOVIE,
      payload: movieMock
    });
  });

  it(`Action creator for incrementShowingCards returns correct action`, () => {
    expect(ActionCreator.incrementShowingCards()).toEqual({
      type: ActionType.INCREMENT_SHOWING_CARDS,
      payload: FilmsCount.BY_BUTTON_CLICK
    });
  });

  it(`Action creator for setPreloaderState returns correct action`, () => {
    expect(ActionCreator.setPreloaderState(true)).toEqual({
      type: ActionType.SET_PRELOADER_STATE,
      payload: true
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, []);

    return moviesLoader(dispatch, noop, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: []
      });
    });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMainMovie();

    apiMock.onGet(`/films/promo`).reply(200, {});

    return moviesLoader(dispatch, noop, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_MAIN_MOVIE,
        payload: {}
      });
    });
  });
});
