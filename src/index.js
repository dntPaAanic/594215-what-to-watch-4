import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './api.js';
import reducer from './reducer/reducer.js';
import {Operation as FilmsOperation, ActionCreator} from './reducer/films/films.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from './reducer/user/user.js';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthStatus(false));
};

const api = createAPI(onUnauthorized);
const store = createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

const init = () => {
  store.dispatch(ActionCreator.setPreloaderState(true));
  const loadMainMovie = store.dispatch(FilmsOperation.loadMainMovie());
  const loadFilms = store.dispatch(FilmsOperation.loadFilms());

  return Promise.all([loadMainMovie, loadFilms])
    .then(() => {
      store.dispatch(ActionCreator.setPreloaderState(false));
      store.dispatch(UserOperation.checkAuth());
    }).catch((err) => {
      throw err;
    });
};

init();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

