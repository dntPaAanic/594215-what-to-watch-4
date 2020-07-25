import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16/build';
import SignIn from './sign-in';
import {noop} from '../../helpers/utils';

jest.mock(`react-router-dom`, () => ({Link: `a`}));

const mockEvent = {
  preventDefault: noop,
};

configure({
  adapter: new Adapter(),
});

describe(`SingIn component tests group`, () => {
  const handlerFormSubmit = jest.fn();

  const wrapper = mount(<SignIn onFormSubmit={handlerFormSubmit}/>);

  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, mockEvent);

  it(`onFormSubmit callback is called`, () => {
    expect(handlerFormSubmit).toBeCalledTimes(1);
  });

  it(`Check data in onFormSubmit callback`, () => {
    expect(handlerFormSubmit).toBeCalledWith({
      email: ``,
      password: ``,
    });
  });
});
