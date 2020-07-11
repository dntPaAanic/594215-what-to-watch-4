import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';

it(`SignIn should render correct`, () => {
  const tree = renderer
    .create(
        <SignIn onFormSubmit={() => {}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
