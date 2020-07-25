import * as React from 'react';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import {Film, Comment} from '../../types';

type TabProps = {
  film: Film;
  activeTab: number;
  isCommentsLoaded: boolean;
  comments: Comment[];
};

const Tab: React.FunctionComponent<TabProps> = (props: TabProps) =>{
  const {film, activeTab, comments, isCommentsLoaded} = props;
  const tabNavComponents = [MoviePageOverview, MoviePageDetails, MoviePageReviews];
  const ActiveTabNavComponent = tabNavComponents[activeTab];

  return (
    <ActiveTabNavComponent
      film={film}
      comments={comments}
      isCommentsLoaded={isCommentsLoaded}
    />
  );
};

export default Tab;
