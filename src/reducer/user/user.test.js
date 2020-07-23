import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, Operation} from './user';
import {films} from '../../helpers/test-data';

const api = createAPI(() => {});

const authDataMock = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

describe(`Reducer tests group for user`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authUserData: null,
      authorizationStatus: false,
      myFilmList: [],
      isMyFilmListLoading: false
    });
  });

  it(`Reducer should set authorizationStatus by setAuthStatus`, () => {
    expect(reducer({
      authorizationStatus: false,
    }, {
      type: ActionType.SET_AUTH_STATUS,
      payload: true,
    })).toEqual({
      authorizationStatus: true,
    });
  });

  it(`Reducer should set authUserData by setAuthUserData`, () => {
    expect(reducer({
      authUserData: null,
    }, {
      type: ActionType.SET_AUTH_USER_DATA,
      payload: authDataMock,
    })).toEqual({
      authUserData: authDataMock,
    });
  });

  it(`Reducer should get myFilmList by loadMyFilmsList`, () => {
    expect(reducer({
      myFilmList: [],
    }, {
      type: ActionType.LOAD_MY_FILMS_LIST,
      payload: films,
    })).toEqual({
      myFilmList: films,
    });
  });

  it(`Reducer should set isMyFilmListLoading by setMyFilmListLoaderState`, () => {
    expect(reducer({
      isMyFilmListLoading: false,
    }, {
      type: ActionType.SET_MY_FILM_LIST_LOADER_STATE,
      payload: true,
    })).toEqual({
      isMyFilmListLoading: true,
    });
  });

  it(`Reducer should add film by addFilmToMyList`, () => {
    expect(reducer({
      myFilmList: [],
    }, {
      type: ActionType.ADD_FILM,
      payload: [{film: 1}],
    })).toEqual({
      myFilmList: [{film: 1}],
    });
  });

  it(`Reducer should remove film by removeFilmFromMyList`, () => {
    expect(reducer({
      myFilmList: [{id: 1}, {id: 2}],
    }, {
      type: ActionType.REMOVE_FILM,
      payload: {id: 1},
    })).toEqual({
      myFilmList: [{id: 2}],
    });
  });


});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setAuthStatus returns correct action`, () => {
    expect(ActionCreator.setAuthStatus(true)).toEqual({
      type: ActionType.SET_AUTH_STATUS,
      payload: true
    });
  });
  it(`Action creator for setAuthUserData returns correct action`, () => {
    expect(ActionCreator.setAuthUserData(authDataMock)).toEqual({
      type: ActionType.SET_AUTH_USER_DATA,
      payload: authDataMock
    });
  });
  it(`Action creator for loadMyFilmsList returns correct action`, () => {
    expect(ActionCreator.loadMyFilmsList(films)).toEqual({
      type: ActionType.LOAD_MY_FILMS_LIST,
      payload: films
    });
  });
  it(`Action creator for addFilmToMyList returns correct action`, () => {
    expect(ActionCreator.addFilmToMyList(films[0])).toEqual({
      type: ActionType.ADD_FILM,
      payload: films[0]
    });
  });
  it(`Action creator for removeFilmFromMyList returns correct action`, () => {
    expect(ActionCreator.removeFilmFromMyList(films[0])).toEqual({
      type: ActionType.REMOVE_FILM,
      payload: films[0]
    });
  });
  it(`Action creator for setMyFilmListLoaderState returns correct action`, () => {
    expect(ActionCreator.setMyFilmListLoaderState(true)).toEqual({
      type: ActionType.SET_MY_FILM_LIST_LOADER_STATE,
      payload: true
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock.onGet(`/login`).reply(200, {
      'id': 1,
      'email': `Oliver.conner@gmail.com`,
      'name': `Oliver.conner`,
      'avatar_url': `img/1.png`
    });

    return checkAuth(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.SET_AUTH_USER_DATA,
            payload: authDataMock
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionType.SET_AUTH_STATUS,
            payload: true
          });
    });
  });

  it(`Should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteMoviesListLoader = Operation.loadFavoriteFilms();

    apiMock.onGet(`/favorite`).reply(200, []);

    return favoriteMoviesListLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.SET_MY_FILM_LIST_LOADER_STATE,
            payload: true
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionType.LOAD_MY_FILMS_LIST,
            payload: []
          });
      expect(dispatch).toHaveBeenNthCalledWith(3,
          {
            type: ActionType.SET_MY_FILM_LIST_LOADER_STATE,
            payload: false
          });
    });
  });

  it(`Should make a correct API call POST to /favorite/film_id/status`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockState = {
      FILMS: {
        movieCards: films
      }
    };
    const getState = () => mockState;
    const status = (films[0].isFavorite) ? 0 : 1;
    const toggleFavorite = Operation.toggleFavorite(films[0].id);

    apiMock.onPost(`/favorite/${films[0].id}/${status}`).reply(200, films[0]);

    return toggleFavorite(dispatch, getState, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.ADD_FILM,
        payload: films[0]
      });
    });
  });
});
