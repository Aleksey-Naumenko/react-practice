import React from "react";
import Logout from "../Logout";
import { shallow } from "enzyme";

describe("<Logout />", () => {
  it("should logout user on Logout button click", () => {
    const mockOnLogout = jest.fn();
    const wrappedComponent = shallow(<Logout onLogout={mockOnLogout} />);
    wrappedComponent.find('.logout').simulate('click');
    expect(mockOnLogout).toBeCalled();
  });
});