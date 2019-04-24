import React from 'react';
import {Link} from 'react-router-dom';

import { withFirebase } from '../Firebase'
const buttonStyle={
  cursor: 'pointer'
}

const SignOutButton = ({ firebase }) => (
  <Link to="/">
  <button type="button" onClick={firebase.doSignOut} style={buttonStyle}>
    Sign Out
  </button>
  </Link>
);

export default withFirebase(SignOutButton);