import React, { Component } from 'react';
import { LoginFormContainer } from './components/form.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Protected from './components/UserPage';

export default class App extends Component {
  render() {
    return (
      <>
        <h2 className="title text-primary text-center my-4">Welcome to our starting Page</h2>
        <div className="container my-4">
          <div className="jumbotron p-5">
            <BrowserRouter>
              <Route path="/" exact component={LoginFormContainer} />
              <Route path="/user" component={Protected} />

            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }

}
