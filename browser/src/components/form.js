import React, { Component } from 'react';
import {  changeAction, requestAction } from '../redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.makeRequest({userName: this.props.userNameValue, password: this.props.passwordValue});
  }

  render() {
    return (
      <>
      <form className="text-center" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3 input-group-lg">
           <div className="input-group-prepend">
             <span className="input-group-text">Username</span>
          </div>
          <input onChange={this.props.handleChange} type="text" className="form-control" value={this.props.userNameValue} />
        </div>
        <div className="input-group mb-3 input-group-lg">
           <div className="input-group-prepend">
             <span className="input-group-text">Password</span>
          </div>
          <input onChange={this.props.handleChange} type="password" className="form-control" value={this.props.passwordValue}/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Log in</button>
      </form>
      {this.props.attemptRedirect && <Redirect to="/user" />}
      {this.props.hasFailed && <div className="alert alert-danger my-4">Either username or password was incorrect. Try again!</div>}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userNameValue: state.userNameValue,
    passwordValue: state.passwordValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: ev => dispatch(changeAction(ev)),
    makeRequest: payload => dispatch(requestAction(payload))
  }
}

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
