import * as React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {filterGenres, filterType, onFilterClick} = props;

  return (
    <ul className="catalog__genres-list">
      {filterGenres.map((filterGenre) => {
        return (
          <li className={`catalog__genres-item ${
            filterType === filterGenre
              ? `catalog__genres-item--active`
              : ``
          }`} key={filterGenre}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              if (filterType !== filterGenre) {
                onFilterClick(filterGenre);
              }
            }
            }>{filterGenre}</a>
          </li>
        );
      })}
    </ul>
  );
};
GenresList.propTypes = {
  filterGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterType: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default GenresList;
