import React from 'react';
import PropTypes from 'prop-types';

import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  const tweetList = tweets.map(tweet => <Tweet {...tweet} />);

  return <section id={tweetList}>{tweetList}</section>;
};

TweetList.propTypes = {};

export default TweetList;
