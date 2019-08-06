import React from 'react';
import PropTypes from 'prop-types';
import './NewTweet.scss';

// 1. Create a controlled component on the textarea
// 2. Update the counter as we type
// 3. Create a validation before submitting
// 4. submit tweet will send the tweet content via submitTweet and reset the textarea
// 5. create a new tweet and add it to the list of existing tweets

const NewTweet = ({ submitTweet }) => {
  const handleSubmit = event => {
    event.preventDefault();
    submitTweet('tweet content');
  };

  return (
    <section className="new-tweet">
      <header>
        <div id="error-container">
          <h4 />
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <textarea name="text" placeholder="What are you humming about?" />
        <footer>
          <input className="btn-new-tweet" type="submit" value="Tweet" />
          <span className="counter">140</span>
        </footer>
      </form>
    </section>
  );
};

NewTweet.propTypes = {};

export default NewTweet;
