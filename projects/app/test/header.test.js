import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./utils";
import Header from "../frontend/src/components/layout/Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("Should render without errors ", () => {
    const wrapper = findByTestAtrr(component, "nav-header");
    expect(wrapper.length).toBe(1);
  });
});
