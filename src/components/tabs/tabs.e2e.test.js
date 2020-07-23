import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

const tabClickHandler = jest.fn();

const tabs = shallow(
    <Tabs
      onTabClick={tabClickHandler}
      activeTab={1}
    />
);

const filmLink = tabs.find(`.movie-nav__link`).first();

it(`Tabs tab click is correct`, () => {
  filmLink.simulate(`click`, {preventDefault() {}});
  expect(tabClickHandler).toHaveBeenCalledTimes(1);
  expect(tabClickHandler).toBeCalledWith(0);
});
