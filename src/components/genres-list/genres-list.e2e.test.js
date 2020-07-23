import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenresList from './genres-list';

Enzyme.configure({
  adapter: new Adapter(),
});

const filterClickHandler = jest.fn();

const genresList = shallow(
    <GenresList
      filterGenres={[`Romance`, `Thrillers`]}
      filterType={`Thrillers`}
      onFilterClick={filterClickHandler}
    />
);

const filterGenresLink = genresList.find(`.catalog__genres-link`).first();

it(`GenresList. click on genre filter is correct`, () => {
  filterGenresLink.simulate(`click`, {preventDefault() {}});
  expect(filterClickHandler).toHaveBeenCalledTimes(1);
  expect(filterClickHandler).toBeCalledWith(`Romance`);
});
