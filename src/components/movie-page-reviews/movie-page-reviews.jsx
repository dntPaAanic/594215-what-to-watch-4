import React from 'react';
import PropTypes from 'prop-types';

const MoviePageReviews = (props) => {
  const {film} = props;
  const {comments} = film;
  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {comments && comments.map((comment) => {
            return (
              <div className="review" key={`${comment.author}-${comment.id}`}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.review}</p>
                  <footer className="review__details">
                    <cite className="review__author">{comment.author}</cite>
                    <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{comment.rating}</div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

MoviePageReviews.propTypes = {
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
    runTime: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired
};

export default MoviePageReviews;
