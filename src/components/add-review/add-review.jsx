import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/comments/comments.js';
import UserBlock from '../user-block/user-block.jsx';
import {Link} from 'react-router-dom';
import history from '../../history.js';

const STARS_COUNT = 5;
const ValidateRule = {
  TEXT: {
    MIN: 50,
    MAX: 400,
  },
  RANKING: {
    MIN: 1,
    MAX: 5
  }
};
const comment = {
  rating: -1,
  review: ``
};

const AddReview = (props) => {
  const {film, isValid, onIsValidChange, onSubmit} = props;

  const [disabled, setDisabled] = useState(false);

  const _toggleFormDisability = () => {
    setDisabled(!disabled);
  };

  const _handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;

    if (target.name === `rating`) {
      comment.rating = Number(value);
    }

    if (target.name === `review-text`) {
      comment.review = value;
    }

    const validateStatus = _commentValidate(comment);
    onIsValidChange(validateStatus);
  };

  const _handleFormSubmit = (evt) => {
    evt.preventDefault();
    _toggleFormDisability();

    onSubmit(
        {
          filmId: film.id,
          rating: comment.rating,
          comment: comment.review
        },
        () => {
          _toggleFormDisability();
          history.push(`/films/${film.id}`);
        },
        () => {
          _toggleFormDisability();
        }
    );
  };

  const _commentValidate = (filmComment) => {
    const validateErrors = [];

    validateErrors.push(filmComment.review.length < ValidateRule.TEXT.MIN);
    validateErrors.push(filmComment.review.length > ValidateRule.TEXT.MAX);
    validateErrors.push(filmComment.rating < ValidateRule.RANKING.MIN);
    validateErrors.push(filmComment.rating > ValidateRule.RANKING.MAX);

    return !validateErrors.some((error) => error);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.imageBackground} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{film.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.imagePoster} alt={`${film.title} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={_handleFormSubmit} onChange={_handleInputChange}>
          <div className="rating">
            <div className="rating__stars">
              {new Array(STARS_COUNT).fill(``).map((_, index) => (
                <Fragment key={`${index}_star`}>
                  <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index + 1} />
                  <label className="rating__label" htmlFor={`star-${index}`}>Rating ${index}</label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" disabled={disabled}/>
            <div className="add-review__submit">
              {isValid && <button className="add-review__btn" type="submit" disabled={disabled}>Post</button>}
            </div>
          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
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
  onIsValidChange: PropTypes.func,
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData, onSuccess, onError) {
    dispatch(Operation.createComment(commentData, onSuccess, onError));
  },
});

export {AddReview};
export default connect(null, mapDispatchToProps)(AddReview);