import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, BrowserButton } from '../components/Button';

storiesOf('GeoWebButton', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></Button>
  ));

storiesOf('BrowserButton', module)
  .add('with text', () => (<div style={{ display: 'flex', flexDirection: 'column', maxWidth: '40%' }}>
    <BrowserButton onClick={action('clicked')}>Hello Button</BrowserButton>
    <BrowserButton onClick={action('clicked')} disabled>Hello disabled Button</BrowserButton>
    <BrowserButton onClick={action('clicked')} focus='focus'>Hello focus Button</BrowserButton>
    <BrowserButton onClick={action('clicked')} active='active'>Hello active Button</BrowserButton>
  </div>))
  .add('with some emoji', () => (
    <BrowserButton onClick={action('clicked')}><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></BrowserButton>
  ));
