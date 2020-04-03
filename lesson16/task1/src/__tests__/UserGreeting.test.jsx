import React from "react";
import UserGreeting from "../UserGreeting";
import { shallow } from "enzyme";

describe("<UserGreeting />", () => {
  it("should render correctly user greeting", () => {
    const wrappedComponent = shallow(<UserGreeting />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
