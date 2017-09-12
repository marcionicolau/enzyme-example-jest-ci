// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Foo from "./Foo";

import { specs, describe, it } from "storybook-addon-specifications";

import { mount } from "enzyme";
import expect from "expect";

storiesOf("Foo", module)
  .add("Default options", () => <Foo loading info="Bar" />)
  .add("Foo with interaction props", () => {
    const story = <Foo loading={false} info="Bar" />;

    specs(() =>
      describe("loading setState", () => {
        it("Should have loading set to false", () => {
          const output = mount(story);
          expect(output.find(".foo").length).toBe(1);
        });

        it("Should have loading set to true", () => {
          const output = mount(story);
          expect(
            output.setState({ loading: true }).find(".foo-loading").length
          ).toBe(1);
        });
      })
    );

    return story;
  });
