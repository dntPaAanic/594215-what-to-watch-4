import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withFullPlayer from './with-full-player.js';
import {film} from '../../helpers/test-data.js';

const TestComponent = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

TestComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const TestComponentWrapped = withFullPlayer(TestComponent);

it(`withFullPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <TestComponentWrapped
        autoPlay={false}
        film={film}
        muted={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
