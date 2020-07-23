import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMore from './show-more';

Enzyme.configure({
  adapter: new Adapter(),
});

const showMoreButtonClickHandler = jest.fn();

const showMore = shallow(
    <ShowMore
      onShowMoreButtonClick={showMoreButtonClickHandler}
    />
);

const showMoreButton = showMore.find(`.catalog__button`);

it(`ShowMore: button click is correct`, () => {
  showMoreButton.simulate(`click`);
  expect(showMoreButtonClickHandler).toHaveBeenCalledTimes(1);
});
