import React from 'react';
import PropTypes from 'prop-types';

const tabNames = [`Overview`, `Details`, `Reviews`];

const Tabs = (props) => {
  const {onTabClick, activeTab} = props;

  return (
    <ul className="movie-nav__list">
      {tabNames.map((tabName, i) => {
        return (
          <li className={`movie-nav__item ${
            activeTab === i
              ? `movie-nav__item--active`
              : ``
          }`} key={tabName}>
            <a href="#" className="movie-nav__link" onClick={(evt) => {
              evt.preventDefault();
              if (activeTab !== i) {
                onTabClick(i);
              }
            }}>{tabName}</a>
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
