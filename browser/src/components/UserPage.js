import React, { Component } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import Auth from '../auth';
import { connect } from 'react-redux';

export default class Protected extends Component {
  render() {
    if (Auth.isAuthenticated()) {
      return <Route component={UserPage} />
    } else {
      return <Redirect to="/" />
    }
  }
}

class NavList extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/user">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/hobbies">Hobbies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/profile">Profile</NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger btn-sm">Logout</button>
        </li>
      </ul>
    )
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <h2 className="title text-center mt-5">Hello {this.props.userInfo.userName}</h2>
    )
  }
}

class UserPage extends Component {
  render() {
    return (
      <>
        <NavList />
        <Route exact path="/user" component={WelcomeComponentContainer} />

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

const WelcomeComponentContainer = connect(mapStateToProps)(WelcomeComponent);
