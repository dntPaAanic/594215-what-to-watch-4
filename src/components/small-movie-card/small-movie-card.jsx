import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {film, onCardClick, onCardMouseEnter, onCardMouseLeave, activeCardId} = props;
  const {title, imagePreview, previewSrc} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={(evt) => {
        evt.preventDefault();
        onCardClick(film.id);
      }}
      onMouseEnter={() => onCardMouseEnter(film.id)}
      onMouseLeave={() => onCardMouseLeave()}>
      <Link to={`/films/${film.id}`} style={{color: `unset`}}>
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewSrc}
            isPlaying={film.id === activeCardId}
            imagePreview={imagePreview}
            muted={true}
          />
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link" href="#">{title}</span>
        </h3>
      </Link>
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
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    previewSrc: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
  activeCardId: PropTypes.number.isRequired,
};

export default SmallMovieCard;

