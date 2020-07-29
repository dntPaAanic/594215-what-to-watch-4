import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Tab from './tab';
import {film} from '../../helpers/test-data';

it(`Tab component should render correct`, () => {
  const tree = renderer.create(
      <Tab
        film={film}
        activeTab={0}
        comments={[]}
        isCommentsLoaded={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
