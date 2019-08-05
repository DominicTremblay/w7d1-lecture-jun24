import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NewTweet from '../NewTweet';

storiesOf('NewTweet', module)
  .add('default', () => <NewTweet />)
  .add('NewTweet with click', () => (
    <NewTweet submitTweet={action('submitTweet')} />
  ));
