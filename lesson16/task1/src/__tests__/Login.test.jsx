import React from "react";
import Login from "../Login";
import { shallow } from "enzyme";

describe("<Login />", () => {
  it("should login user on login button click", () => {
    const mockOnLogin = jest.fn();
    const wrappedComponent = shallow(<Login onLogin={mockOnLogin} />);
    wrappedComponent.find('.login').simulate('click');
    expect(mockOnLogin).toBeCalled();
  });
});
