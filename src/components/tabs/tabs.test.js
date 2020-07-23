import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

it(`Tabs should render correct`, () => {
  const tree = renderer.create(
      <Tabs
        onTabClick={() => {}}
        activeTab={0}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
