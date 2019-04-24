import React from 'react';

import { withFirebase } from '../Firebase'
const buttonStyle={
  cursor: 'pointer'
}
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} style={buttonStyle}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);