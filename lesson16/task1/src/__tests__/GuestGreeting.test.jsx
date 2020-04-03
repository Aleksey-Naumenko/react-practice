import React from "react";
import GuestGreeting from "../GuestGreeting";
import { shallow } from "enzyme";

describe("<GuestGreeting />", () => {
  it("should render correctly guest greeting", () => {
    const wrappedComponent = shallow(<GuestGreeting />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});