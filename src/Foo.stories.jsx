// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Foo from "./Foo";

import { specs, describe, it } from "storybook-addon-specifications";

import { mount } from "enzyme";
import expect from "expect";

storiesOf("Foo", module)
  .addDecorator(withKnobs)
  .add("Default options", () => <Foo loading info="Bar" />)
  .add("with a button", () => (
    <button disabled={boolean("Disabled", false)}>
      {text("Label", "Hello Button")}
    </button>
  ))
  .add("as dynamic variables", () => {
    const name = text("Name", "Arunoda Susiripala");
    const age = number("Age", 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return <div>{content}</div>;
  })
  .add("Foo with interaction props", () => {
    let loaded = boolean("Loading", false);
    const story = <Foo loading={loaded} info={text("Info", "Hello Button")} />;

    specs(() =>
      describe("loading setState", () => {
        it("Should have loading set to false", () => {
          const output = mount(story);
          expect(output.find(".foo").length).toBe(1);
        });

        it("Should have loading set to loaded state", () => {
          const output = mount(story);
          expect(
            output.setState({ loading: loaded }).find(".foo-loading").length
          ).toBe(1);
        });
      })
    );

    return story;
  });
