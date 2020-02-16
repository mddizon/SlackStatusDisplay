import React from 'react';
import './index.css';
import {fetchUserInfo, fetchUserPresence} from './status_fetcher';

class FormData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>user:</label>
        <input type="text" id="user" />
        <br />
        <label>token:</label>
        <input type="text" id="token" />
        <br />
      </form>
    );
  }
}

export default FormData;
