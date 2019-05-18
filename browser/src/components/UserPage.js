import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../auth';

export default class Protected extends Component {
  render() {
    if (Auth.isAuthenticated()) {
      return <Route component={UserPage} />
    } else {
      return <Redirect to="/" />
    }
  }
}

class UserPage extends Component {
  render() {
    return <h2 className="title">Welcome User</h2>;
  }
}
