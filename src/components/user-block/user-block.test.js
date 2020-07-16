import React from 'react';
import renderer from 'react-test-renderer';
import {UserBlock} from './user-block.jsx';

const authUserData = {
  id: 1,
  email: `leeroy.jenkins@gmail.com`,
  name: `Leeroy Jenkins`,
  avatarUrl: `img/1.png`
};

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`UserBlock component should render correct`, () => {
  const tree = renderer
    .create(
        <UserBlock isAuthed={true} authUserData={authUserData}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
