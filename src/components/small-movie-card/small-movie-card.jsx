import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, onCardClick, onCardMouseEnter, onCardMouseLeave} = props;
  const {title, imagePreview, id} = film;
  return (
    <article className="small-movie-card catalog__movies-card"
      key={title + id}
      onClick={(evt) => {
        evt.preventDefault();
        onCardClick(id);
      }}
      onMouseEnter={() => onCardMouseEnter(film)}
      onMouseLeave={onCardMouseLeave}>
      <div className="small-movie-card__image">
        <img src={`img/${imagePreview}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
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
    starring: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};

export default SmallMovieCard;
