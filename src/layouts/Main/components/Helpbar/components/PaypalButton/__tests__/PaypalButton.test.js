import PaypalButton from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("PaypalButton", () => {
  it("should render correctly", () => {
    let PaypalButtonSnapshot = shallow(<PaypalButton/>);
    expect(PaypalButtonSnapshot).toMatchSnapshot();
  });
});