import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHobbyAction, pushHobbyFunction } from '../redux';

class Hobbies extends Component {

  pushHobby = ev => {
    ev.preventDefault();
    this.props.pushHobby(this.props.tempHobby);
  }

  render() {
    return (
      <>
        <h3 className="title my-5 text-dark">Your hobbies are: </h3>
        <ul className="nav flex-column mb-5">
          {this.props.hobbies.map((hobby, index) => {
            return <li key={index} className="nav-item">{index + 1}. {hobby}</li>;
          })}
        </ul>
        <form className="text-center" onSubmit={this.pushHobby}>
          <div className="input-group mb-3 input-group-lg">
             <div className="input-group-prepend">
               <span className="input-group-text">Create a hobby</span>
            </div>
            <input onChange={this.props.changeHobby} type="text" className="form-control" value={this.props.tempHobby} />
          </div>
          <button type="submit" className="btn btn-success btn-lg">Push new hobby</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    hobbies: state.userInfo.hobbies,
    tempHobby: state.tempHobby
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeHobby: ev => dispatch(changeHobbyAction(ev)),
    pushHobby: hobbyValue => dispatch(pushHobbyFunction(hobbyValue))
  }
}

export const HobbiesContainer = connect(mapStateToProps, mapDispatchToProps)(Hobbies);
