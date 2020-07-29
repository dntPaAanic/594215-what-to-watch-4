import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ShowMore from './show-more';

configure({
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
