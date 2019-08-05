import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tweet from '../Tweet';

const tweet = {
  user: {
    name: 'Descartes',
    avatars: 'https://i.imgur.com/nlhLi3I.png',
    handle: '@rd',
  },
  content: {
    text: 'Je pense , donc je suis',
  },
  created_at: 1461113959088,
};

storiesOf('Tweet', module).add('Tweet', () => (
  // <Tweet
  //   user={tweet.user}
  //   content={tweet.content}
  //   created_at={tweet.created_at}
  // />

  <Tweet {...tweet} />
));
