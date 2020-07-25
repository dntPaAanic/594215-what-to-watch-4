import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';
import {noop} from '../../helpers/utils';

const mockEvent = {
  preventDefault: noop,
};

configure({
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
  filmLink.simulate(`click`, mockEvent);
  expect(tabClickHandler).toHaveBeenCalledTimes(1);
  expect(tabClickHandler).toBeCalledWith(0);
});
