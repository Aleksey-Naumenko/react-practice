import React from 'react';
import { shallow } from 'enzyme';
import Task from '../Task';

describe('<Task />', () => {
  it ('should render TodoList', () => {
    const props = {
      onDeleteTask: jest.fn(),
      onChangeStatus: jest.fn(),
      id: 'task-id-1',
      text: 'Task-1',
    };
    const wrappedComponent = shallow(<Task {...props}/>);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it ('should render undone task', () => {
    const props = {
      onDeleteTask: jest.fn(),
      onChangeStatus: jest.fn(),
      id: 'task-id-1',
      text: 'Task-1',
      done: false
    };
    const wrappedComponent = shallow(<Task {...props}/>);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it ('should update task on checkbox checked', () => {
    const props = {
      onDeleteTask: jest.fn(),
      onChangeStatus: jest.fn(),
      id: 'task-id-1',
      text: 'Task-1',
      done: true
    };
    const wrappedComponent = shallow(<Task {...props}/>);
    wrappedComponent.find('.list-item__checkbox').simulate('change');
    expect(props.onChangeStatus).toBeCalledWith('task-id-1');
  });

  it ('should delete task', () => {
    const props = {
      onDeleteTask: jest.fn(),
      onChangeStatus: jest.fn(),
      id: 'task-id-1',
      text: 'Task-1',
      done: true
    };
    const wrappedComponent = shallow(<Task {...props}/>);
    wrappedComponent.find('.list-item__delete-btn').simulate('click');
    expect(props.onDeleteTask).toBeCalledWith('task-id-1');
  });
});