import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, BrowserButton } from '../components/Button';

addDecorator(story => (
  <div style={{ padding: '0.3rem' }}>
    {story()}
  </div>
));

storiesOf('GeoWebButton', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>😀 😎 👍 💯</span>
    </Button>
  ));

storiesOf('BrowserButton', module)
  .addDecorator(story => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {story()}
    </div>
  ))
  .add('with text', () => (
    <BrowserButton onClick={action('clicked')}>Hello Button</BrowserButton>
  ))
  .add('with some emoji', () => (
    <BrowserButton onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>😀 😎 👍 💯</span>
    </BrowserButton>
  ));
