import React from 'react';
import './App.scss';
import NewTweet from './NewTweet';

function App() {
  return (
    <main class="container">
      <Nav />
      <Header />
      <NewTweet />
      <TweetList />
    </main>
  );
}

export default App;
