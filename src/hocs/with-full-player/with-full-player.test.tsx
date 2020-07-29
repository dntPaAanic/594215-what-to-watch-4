import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withFullPlayer from './with-full-player';
import {film} from '../../helpers/test-data';

interface TestComponentProps {
  children: React.ReactNode | React.ReactNode[];
}

const TestComponent = (props: TestComponentProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
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
