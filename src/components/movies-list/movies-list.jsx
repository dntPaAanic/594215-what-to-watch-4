import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActiveItem from '../../hocs/with-active-item.js';

const SmallMovieCardWrapped = withActiveItem(SmallMovieCard);

const MoviesList = (props) => {
  const {films, onCardClick} = props;

  return (
    <React.Fragment>
      {films.map((film) =>
        <SmallMovieCardWrapped
          film={film}
          onCardClick={onCardClick}
          key={film.title}
        />)}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePreview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    imagePoster: PropTypes.string.isRequired,
    imageBackground: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired
  })).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MoviesList;
