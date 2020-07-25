import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './api';
import reducer from './reducer/reducer';
import {Operation as FilmsOperation, ActionCreator} from './reducer/films/films';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from './reducer/user/user';
import {composeWithDevTools} from 'redux-devtools-extension';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthStatus(false));
};

const api = createAPI(onUnauthorized);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

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

