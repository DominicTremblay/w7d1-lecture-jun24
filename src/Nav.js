import React from 'react';
import PropTypes from 'prop-types';

import './Nav.scss';

const Nav = ({ writeTweet }) => {
  return (
    <nav>
      <div className="nav-content">
        <span>tweeter</span>
        <div className="write-tweet" onClick={writeTweet}>
          <p>
            <span>Write</span> a new tweet
          </p>
          <i className="fas fa-angle-double-down" />
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  writeTweet: PropTypes.func,
};

export default Nav;
