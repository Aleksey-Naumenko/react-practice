import React from "react";
import Auth from "../Auth";
import { shallow } from "enzyme";

describe("<Auth />", () => {
  it("should render Login button if user is logged in", () => {
    const wrappedComponent = shallow(<Auth />);

    expect(wrappedComponent.find('Login').exists()).toBeTruthy();
  });

  it("should render Logout button if user is not logged in", () => {
    const wrappedComponent = shallow(<Auth />);
    wrappedComponent.find('Login').prop('onLogin')();
    expect(wrappedComponent.find('Logout').exists()).toBeTruthy();
  });
});
