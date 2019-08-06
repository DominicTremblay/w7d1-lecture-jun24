import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTweet.scss';

// 1. Create a controlled component on the textarea
// 2. Update the counter as we type
// 3. Create a validation before submitting
// 4. submit tweet will send the tweet content via submitTweet and reset the textarea
// 5. create a new tweet and add it to the list of existing tweets

const NewTweet = ({ submitTweet }) => {
  const MAX_COUNT = 140;

  const [text, setText] = useState('');
  const [count, setCount] = useState(MAX_COUNT);
  const [errorMsg, setErrorMsg] = useState(null);

  const validateTweet = () => {
    if (text.length <= 0) {
      setErrorMsg('Please enter a tweet.');
      return false;
    }

    if (text.length > MAX_COUNT) {
      setErrorMsg(`Please enter a tweet of less than ${MAX_COUNT} characters`);
      return false;
    }

    return true;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateTweet()) {
      submitTweet(text);
      setText('');
      setCount(MAX_COUNT);
    }
  };

  return (
    <section className="new-tweet">
      <header>
        <div id="error-container">
          <h4>{errorMsg}</h4>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          placeholder="What are you humming about?"
          onChange={event => setText(event.target.value)}
          value={text}
          onKeyUp={() => setCount(MAX_COUNT - text.length)}
        />
        <footer>
          <input className="btn-new-tweet" type="submit" value="Tweet" />
          <span className="counter">{count}</span>
        </footer>
      </form>
    </section>
  );
};

NewTweet.propTypes = {};

export default NewTweet;
