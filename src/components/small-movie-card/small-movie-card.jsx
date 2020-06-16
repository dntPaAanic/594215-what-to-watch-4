import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({movieTitle, onTitleClick}) => {
  return (
    <article key={movieTitle} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
