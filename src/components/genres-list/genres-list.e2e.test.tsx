import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import GenresList from './genres-list';
import {noop} from '../../helpers/utils';

const mockEvent = {
  preventDefault: noop,
};

configure({
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
  filterGenresLink.simulate(`click`, mockEvent);
  expect(filterClickHandler).toHaveBeenCalledTimes(1);
  expect(filterClickHandler).toBeCalledWith(`Romance`);
});
