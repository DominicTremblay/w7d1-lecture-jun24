import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../Header';

storiesOf('Header', module)
  .add('Header without name', () => <Header />)
  .add('Header with name', () => (
    <Header name="Bob" profileImg="/images/profile-hex.png" />
  ));
