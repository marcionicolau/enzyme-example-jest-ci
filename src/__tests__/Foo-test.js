import React from "react";
import toJson from "enzyme-to-json";
import { shallow, mount, render } from "enzyme";

import Foo from "../Foo";

describe("A suite", function() {
  it("should render without throwing an error", function() {
    const info = "Bar";
    expect(
      shallow(<Foo loading info={info} />).contains(
        <div className="foo-loading">{info}</div>
      )
    ).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo loading={false} />).is(".foo")).toBe(true);
  });

  it("should mount in a full DOM", function() {
    expect(mount(<Foo loading={false} />).find(".foo").length).toBe(1);
  });

  it("should render to static HTML", function() {
    const info = "Bar";
    expect(render(<Foo loading info={info} />).text()).toEqual(info);
  });

  it("snapshot check", () => {
    const wrapper = shallow(<Foo loading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should update Foo props", () => {
    const info = "Foo";
    const wrapper = mount(<Foo loading info="Bar" />);
    expect(wrapper.setState({ info }).text()).toEqual(info);
  });
});
