import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TweetList from '../TweetList';

const tweets = [
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
];

storiesOf('TweetList', module).add('TweetList default', () => (
  <TweetList tweets={tweets} />
));
