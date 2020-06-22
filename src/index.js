import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const movieMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      title={movieMock.title}
      genre={movieMock.genre}
      releaseDate={movieMock.releaseDate}
      films={films}
    />,
    document.querySelector(`#root`)
);

