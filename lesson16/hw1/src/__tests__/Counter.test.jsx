import React from 'react';
import Counter from '../Counter';
import { shallow } from 'enzyme';

describe('Counter', () => {
  it ('initial state should be equal to "0" ', () => {
    const wrappedComponent = shallow(<Counter />);
    const initialState = wrappedComponent.state('counter');

    expect(initialState).toEqual(0);
  });

  it ('should decrease counter by "1" with every click', () => {
    const wrappedComponent = shallow(<Counter />);
    const componentState = wrappedComponent.state('counter');

    wrappedComponent.find('.counter__button:first-child').simulate('click');
    const stateAfterClick = wrappedComponent.state('counter');

    expect(stateAfterClick).toEqual(componentState - 1);
  });

  it ('should increase counter by "1" with every click', () => {
    const wrappedComponent = shallow(<Counter />);
    const componentState = wrappedComponent.state('counter');

    wrappedComponent.find('.counter__button:last-child').simulate('click');
    const stateAfterClick = wrappedComponent.state('counter');

    expect(stateAfterClick).toEqual(componentState + 1);
  });

  it ('should nullify counter', () => {
    const wrappedComponent = shallow(<Counter />);

    wrappedComponent.find('.counter__value').simulate('click');
    const stateAfterClick = wrappedComponent.state('counter');

    expect(stateAfterClick).toEqual(0);
  });
});