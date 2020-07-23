import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list';

const GENRE = `Thrillers`;

it(`GenreList should render correct`, () => {
  const tree = renderer.create(
      <GenresList
        filterGenres={[GENRE]}
        filterType={GENRE}
        onFilterClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
