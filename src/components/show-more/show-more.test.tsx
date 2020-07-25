import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMore from './show-more';
import {noop} from '../../helpers/utils';

it(`ShowMore should render correct`, () => {
  const tree = renderer.create(
      <ShowMore
        onShowMoreButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
