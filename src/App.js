import React from 'react';
import './App.scss';
import NewTweet from './NewTweet';
import Nav from './Nav';
import Header from './Header';
import TweetList from './TweetList';

function App() {
  return (
    <main class="container">
      <Nav />
      <Header name="SpongeBob" profileImg="/images/profile-hex.png" />
      <NewTweet />
      <TweetList tweets={[]} />
    </main>
  );
}

export default App;
