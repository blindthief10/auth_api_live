import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import Auth from './auth';

const initialState = {userNameValue: '', passwordValue: '', loginRedirection: false, userInfo: null};

const authReducer = (state = initialState, action) => {

  const copyState = {...state};

  switch(action.type) {

    case 'FETCH_DATA':
      copyState.userInfo = action.userData;
      return copyState;

    case 'REDIRECT_LOGIN':
      copyState.loginRedirection = true;
      return copyState;

    case 'CHANGE':
      if (action.payload.target.getAttribute('type') === 'text') {
        copyState.userNameValue = action.payload.target.value;
      } else if (action.payload.target.getAttribute('type') === 'password') {
        copyState.passwordValue = action.payload.target.value;
      }
      return copyState;

    default:
      return copyState;
  }
}

export const changeAction = payload => {
  return {
    type: 'CHANGE',
    payload: payload
  }
}

export const requestAction = userData => {
  return {
    type: 'FETCH_DATA',
    userData: userData
  }
}

const redirectToLogin = () => {
  return {
    type: 'REDIRECT_LOGIN'
  }
}

export const loginFetch = credentials => {
  return function(dispatch) {
    fetch('/users/login', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(userData => {
      console.log(userData);
      Auth.login();
      dispatch(requestAction(userData));
      dispatch(redirectToLogin());
    })
    .catch(err => console.warn(err))
  }
}

export const store = createStore(authReducer, applyMiddleware(thunk));
