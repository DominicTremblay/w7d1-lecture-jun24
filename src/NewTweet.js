import React from 'react';
import PropTypes from 'prop-types';
import './NewTweet.scss';

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
