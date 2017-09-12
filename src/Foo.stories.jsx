// @flow

import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import JSXAddon from 'storybook-addon-jsx';
import Foo from './Foo';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from 'enzyme';
import expect from 'expect';

setAddon(JSXAddon);

storiesOf('Foo', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default options', () => <Foo loading info="Bar" />)
  .addWithJSX('with a button', () => (
    <button disabled={boolean('Disabled', false)}>{text('Label', 'Hello Button')}</button>
  ))
  .addWithJSX('as dynamic variables', () => {
    const name = text('Name', 'Lewis Carroll');
    const age = number('Age', 185);

    const content = `I am ${name} and I'm ${age} years old.`;
    return <div>{content}</div>;
  })
  .addWithJSX('Foo with interaction props', () => {
    const loaded = boolean('Loading', false);
    const story = <Foo loading={loaded} info={text('Info', 'Hello Button')} />;

    specs(() =>
      describe('loading setState', () => {
        it('Should have loading set to false', () => {
          const output = mount(story);
          expect(output.find('.foo').length).toBe(1);
        });

        it('Should have loading set to loaded state', () => {
          const output = mount(story);
          expect(output.setState({ loading: loaded }).find('.foo-loading').length).toBe(1);
        });
      }),
    );

    return story;
  });

const Test = ({
  fontSize = '16px',
  fontFamily = 'Arial',
  align = 'left',
  color = 'red',
  children,
}) => <div style={{ color, fontFamily, fontSize, textAlign: align }}>{children}</div>;

storiesOf('test', module)
  .addWithJSX('Paris', () => (
    <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
      Hello
    </Test>
  ))
  .addWithJSX('Orleans', () => <Test color="#236544">Hello</Test>);

storiesOf('test 2', module).addWithJSX('Paris', () => <div color="#333">test</div>);
