import React from 'react';
import Dialog from '../Dialog';
import { shallow } from 'enzyme';

describe('Dialog', () => {
  it ('should render the Dialog', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    expect(wrappedComponent.find('.dialog').exists()).toBeTruthy();
  });

  it ('should not render the Dialog', () => {
    const props = {
      isOpen: false,
      onClose: jest.fn(),
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
  });

  it ('should close the Dialog with click on the button', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    wrappedComponent.find('.dialog__close-btn').simulate('click');
    expect(props.onClose).toBeCalled();
  });

  it ('should show the header of the dialog', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      title: 'Hello from title!'
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    expect(wrappedComponent.find('.dialog__title').exists()).toBeTruthy();
  });

  it ('should render the child elements', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      children: 'Hello we are children'
    };
    const wrappedComponent = shallow(<Dialog {...props} />);
    expect(wrappedComponent.find('.dialog__content').exists()).toBeTruthy();
  });
});