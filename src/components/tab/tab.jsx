import React from "react";
import PropTypes from "prop-types";
import MoviePageOverview from '../movie-page-overview/movie-page-overview.jsx';
import MoviePageDetails from '../movie-page-details/movie-page-details.jsx';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews.jsx';

const Tab = (props) => {
  const {film, activeTab} = props;
  const tabNavComponents = [MoviePageOverview, MoviePageDetails, MoviePageReviews];
  const ActiveTabNavComponent = tabNavComponents[activeTab];

  return (
    <ActiveTabNavComponent
      film={film}
    />
  );
};

Tab.propTypes = {
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
  activeTab: PropTypes.number.isRequired,
};

export default Tab;
