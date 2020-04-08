import React from "react";
import { shallow } from "enzyme";
import TaskInput from "../TaskInput";

describe("<TaskInput />", () => {
  it("should create task on submit", () => {
    const mockOnCreate = jest.fn();
    const wrappedComponent = shallow(<TaskInput onCreateTask={mockOnCreate} />);
    wrappedComponent
      .find(".create-task__input")
      .simulate("change", { target: { value: "Wisit a doctor" } });
    wrappedComponent.find(".create-task-btn").simulate("click");
    expect(mockOnCreate).toBeCalledWith("Wisit a doctor");
  });

  it("should clear the input", () => {
    const mockOnCreate = jest.fn();
    const wrappedComponent = shallow(<TaskInput onCreateTask={mockOnCreate} />);
    wrappedComponent
      .find(".create-task__input")
      .simulate("change", { target: { value: "Wisit a doctor" } });
    wrappedComponent.find(".create-task-btn").simulate("click");
    expect(wrappedComponent.find('.create-task__input').prop('value')).toEqual('');
  });
});
