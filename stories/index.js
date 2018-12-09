import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import CardMessage from '../src/components/CardMessage';

storiesOf('Card Message', module).add('with text', () => {
  const message = {
    author: 'Rokoala',
    text: 'Hello World'
  };
  return <CardMessage message={message} />;
});
