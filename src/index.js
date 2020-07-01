import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./reducer.js";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const movieMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        title={movieMock.title}
        genre={movieMock.genre}
        releaseDate={movieMock.releaseDate}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);

