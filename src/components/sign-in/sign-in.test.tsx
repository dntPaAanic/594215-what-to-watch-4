import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignIn from './sign-in';
import {noop} from '../../helpers/utils';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`SignIn should render correct`, () => {
  const tree = renderer
    .create(
        <SignIn onFormSubmit={noop}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
