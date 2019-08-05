import React from 'react';
import PropTypes from 'prop-types';

import './Tweet.scss';

const Tweet = ({
  user: { name, avatars, handle },
  content: { text },
  created_at,
}) => {
  return (
    <article>
      <header>
        <div className="avatar">
          <img src={avatars} alt="avatar" className="user-avater" />
          <h2 className="user-avater">{name}</h2>
        </div>
        <small className="user-handle">{handle}</small>
      </header>
      <div className="body">
        <p>{text}</p>
      </div>
      <footer>
        <small className="age">{created_at}</small>
        <span className="actions">
          <a href="#">
            <i className="fa fa-flag" />
          </a>
          <a href="#">
            <i className="fa fa-retweet" />
          </a>
          <a href="#">
            <i className="fa fa-heart" />
          </a>
        </span>
      </footer>
    </article>
  );
};

Tweet.propTypes = {};

export default Tweet;
