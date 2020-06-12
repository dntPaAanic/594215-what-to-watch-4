import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {movieTitle, movieGenre, movieReleaseDate, moviesTitle} = props;
  return <Main
    movieTitle={movieTitle}
    movieGenre={movieGenre}
    movieReleaseDate={movieReleaseDate}
    moviesTitle={moviesTitle}/>;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired,
  moviesTitle: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default App;
