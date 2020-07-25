import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GenresList from './genres-list';
import {noop} from '../../helpers/utils';

const GENRE = `Thrillers`;

it(`GenreList should render correct`, () => {
  const tree = renderer.create(
      <GenresList
        filterGenres={[GENRE]}
        filterType={GENRE}
        onFilterClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
