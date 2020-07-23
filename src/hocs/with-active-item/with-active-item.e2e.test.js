import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`withActiveItem group`, () => {
  const TestComponent = () => <div />;
  const TestComponentWrapped = withActiveItem(TestComponent);

  const testWrapper = shallow(<TestComponentWrapped />);

  it(`Default state is -1`, () => {
    expect(testWrapper.state().activeItem).toEqual(-1);
  });

  it(`Set correct state by a given value`, () => {
    testWrapper.instance()._handleActiveItemChange({activeItem: 1});
    expect(testWrapper.state().activeItem).toEqual({activeItem: 1});
  });
});
