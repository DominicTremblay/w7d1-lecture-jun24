import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../Nav';

storiesOf('Nav', module).add('default Nav', () => (
  <Nav writeTweet={action('create a tweet')} />
));
