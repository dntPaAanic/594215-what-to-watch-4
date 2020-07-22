import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab.jsx';
import {film, comments} from '../../helpers/test-data.js';

it(`Tab component should render correct`, () => {
  const tree = renderer.create(
      <Tab
        film={film}
        activeTab={0}
        comments={comments}
        isCommentsLoaded={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
