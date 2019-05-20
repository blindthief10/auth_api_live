import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../redux';

class Profile extends Component {

  componentDidMount() {
    this.props.getImage();
  }

  render() {
    return (
      <img src={this.props.imageSource} style={{width: '50%', height: '20vw'}}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    imageSource: state.imageSource
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImage: () => dispatch(fetchImage())
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
