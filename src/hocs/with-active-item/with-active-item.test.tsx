import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withActiveItem from './with-active-item';

const TestComponent = () => <div />;

const TestComponentWrapped = withActiveItem(TestComponent);

it(`withActiveItem HOC is rendered correctly`, () => {
  const tree = renderer.create(<TestComponentWrapped />).toJSON();

  expect(tree).toMatchSnapshot();
});
