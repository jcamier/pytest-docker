import { postLeadToServer, deleteLeadFromServer } from "./test_functions";
import React from "react";
import Form from "../frontend/src/components/leads/Form";
import { findByTestAtrr } from "./utils";
import { shallow } from "enzyme";
import store from "../frontend/src/store";

describe("Testing post functionality of leads to server", () => {
  let data;

  beforeEach(() => {
    data = {
      name: "TEST",
      email: "test@test.com",
      message: "this is test code"
    };
  });

  test("unique test-email ", async () => {
    expect.assertions(1);
    const result = await postLeadToServer(data);
    expect(result.data.id).toBeTruthy();
  });

  test("non-unique test-email ", async () => {
    expect.assertions(1);
    const result = await postLeadToServer(data);
    expect(typeof result.email).toBeDefined();
  });

  test("empty name field", async () => {
    expect.assertions(1);
    data.name = "";
    const result = await postLeadToServer(data);
    expect(typeof result.name).toBeDefined();
  });

  test("empty email field", async () => {
    expect.assertions(1);
    data.email = "";
    const result = await postLeadToServer(data);
    expect(typeof result.email).toBeDefined();
  });
});

describe("Testing delete functionality of leads to server", () => {
  test("should delete lead from server ", async () => {
    expect.assertions(1);
    const payload = {
      name: "TEST",
      email: "test@delete.com",
      message: "this is test code for deletion"
    };
    const lead = await postLeadToServer(payload);
    const result = await deleteLeadFromServer(lead.data.id);
    expect(result.data).toEqual("");
  });

  test("should show 404 error from server ", async () => {
    expect.assertions(1);
    const id = 100000000;
    const result = await deleteLeadFromServer(id);
    expect(result.response.status).toBe(404);
  });
});

const setUp = (props = {}) => {
  const component = shallow(<Form store={store} {...props} />).dive();
  return component;
};

describe("Form Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("Should render without errors ", () => {
    const wrapper = findByTestAtrr(component, "form-component");
    expect(wrapper.length).toBe(1);
  });

  test("Should render input-type-name without errors ", () => {
    const wrapper = findByTestAtrr(component, "name-component");
    expect(wrapper.length).toBe(1);
  });

  test("Should render input-type-email without errors ", () => {
    const wrapper = findByTestAtrr(component, "email-component");
    expect(wrapper.length).toBe(1);
  });

  test("Should render input-type-textarea without errors ", () => {
    const wrapper = findByTestAtrr(component, "textarea-component");
    expect(wrapper.length).toBe(1);
  });

  test("Should render submit-button without errors ", () => {
    const wrapper = findByTestAtrr(component, "submit-button-component");
    expect(wrapper.length).toBe(1);
  });
});
