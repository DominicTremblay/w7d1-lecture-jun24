import React, { useState } from 'react';
import './App.scss';
import NewTweet from './NewTweet';
import Nav from './Nav';
import Header from './Header';
import TweetList from './TweetList';

import { tweetData } from './lib/tweetData';

// 1. We need to track the state of tweets - Add the build-in tweets
// 2. Update the list of tweets whenever there is a new tweet
// 3. Make a request to the backend API to get a list of tweets

function App() {
  const [tweets, setTweets] = useState(tweetData);

  const submitTweet = content => {
    const newTweet = {
      user: {
        name: 'SpongeBob',
        avatars: 'https://i.imgur.com/nlhLi3I.png',
        handle: '@bob',
      },
      content: {
        text: content,
      },
      created_at: Date.now(),
    };

    setTweets([newTweet, ...tweets]);
  };

  return (
    <main class="container">
      <Nav />
      <Header name="SpongeBob" profileImg="/images/profile-hex.png" />
      <NewTweet submitTweet={submitTweet} />
      <TweetList tweets={tweets} />
    </main>
  );
}

export default App;
