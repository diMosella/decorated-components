import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, BrowserButton } from '../components/Button';
import './stories';

addDecorator(story => (
  <div className='decorator'>
    {story()}
  </div>
));

storiesOf('Button', module)
  .add('with text', () => [
    <span>normal</span>,
    <span>disabled</span>,
    <span>active</span>,
    <Button onClick={action('clicked')} key='b01'>Hello Button</Button>,
    <Button onClick={action('clicked')} disabled key='b02'>Hello Button</Button>,
    <Button onClick={action('clicked')} active='active' key='b03'>Hello Button</Button>,
    <BrowserButton onClick={action('clicked')} key='b04'>Hello Button</BrowserButton>,
    <BrowserButton onClick={action('clicked')} disabled key='b05'>Hello Button</BrowserButton>,
    <BrowserButton onClick={action('clicked')} active='active' key='b06'>Hello Button</BrowserButton>
  ])
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>😀 😎 👍 💯</span>
    </Button>
  ));
