import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, BrowserButton } from '../components/Button';
import './stories';

const states = [
  { label: 'normal', attributes: null },
  { label: 'hover', attributes: { 'data-hover': true } },
  { label: 'focus', attributes: { 'data-focus': true } },
  { label: 'active', attributes: { 'data-active': true } },
  { label: 'disabled', attributes: { 'data-disabled': true } }
];

const createElements = () => {
  const elements = [];
  states.forEach((state, index) => {
    elements.push(<span key={index}>{state.label}</span>);
  });
  states.forEach((state, index) => {
    elements.push(
      <Button key={`b-${index}`} onClick={action('clicked')} {...state.attributes}>
        Hello Button
      </Button>);
  });
  states.forEach((state, index) => {
    elements.push(
      <BrowserButton key={`bB-${index}`} onClick={action('clicked')} {...state.attributes}
        disabled={state.attributes ? state.attributes['data-disabled'] : false}>
        Hello Button
      </BrowserButton>);
  });
  return elements;
}

addDecorator(story => (
  <div className='decorator'>
    {story()}
  </div>
));

storiesOf('Button', module)
  .add('with text', () => (createElements()))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>😀 😎 👍 💯</span>
    </Button>
  ));
