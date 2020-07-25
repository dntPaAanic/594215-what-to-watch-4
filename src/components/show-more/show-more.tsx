import * as React from 'react';

type ShowMoreProps = {
  onShowMoreButtonClick: () => void;
};

const ShowMore: React.FunctionComponent<ShowMoreProps> = (props: ShowMoreProps) => {
  const {onShowMoreButtonClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
  );
};

export default ShowMore;
