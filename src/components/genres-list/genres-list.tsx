import * as React from 'react';

type GenreListProps = {
  filterGenres: string[];
  filterType: string;
  onFilterClick: (genre: string) => void;
};

const GenresList: React.FunctionComponent<GenreListProps> = (props: GenreListProps) => {
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

export default GenresList;
