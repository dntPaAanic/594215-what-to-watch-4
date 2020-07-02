import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.jsx';

it(`ShowMore should render correct`, () => {
  const tree = renderer.create(
      <ShowMore
        onShowMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
