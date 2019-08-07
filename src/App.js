import React, { useState, useEffect } from 'react';
import './App.scss';
import NewTweet from './NewTweet';
import Nav from './Nav';
import Header from './Header';
import TweetList from './TweetList';
import axios from 'axios';

// import { tweetData } from './lib/tweetData';

// 1. We need to track the state of tweets - Add the build-in tweets
// 2. Update the list of tweets whenever there is a new tweet
// 3. Make a request to the backend API to get a list of tweets

function App() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('-'.repeat(20));
  console.log(tweets);

  // Creating a side effect: making a request
  useEffect(() => {
    setLoading(true);

    axios
      .get('/tweets')
      .then(({ data }) => {
        setTweets(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        console.log(err);
        setError(`Error, ${err.message}`);
      });
  }, []);

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

  if (loading) {
    return (
      <main className="container">
        <Nav />

        <div className="loading">
          <h1>Loading tweets...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <Nav />
      <Header name="SpongeBob" profileImg="/images/profile-hex.png" />
      <NewTweet submitTweet={submitTweet} />
      <TweetList tweets={tweets} />
    </main>
  );
}

export default App;
