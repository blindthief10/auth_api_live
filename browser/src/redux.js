import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import Auth from './auth';

const initialState = {
  userNameValue: '',
  passwordValue: '',
  loginRedirection: false,
  userInfo: null,
  hasFailed: false,
  goHome: false,
  tempHobby: ''
};

const authReducer = (state = initialState, action) => {

  const copyState = {...state};

  switch(action.type) {

    case 'HAS_FAILED':
      return {...copyState, hasFailed: true};

    case 'REDIRECT_HOME':
      return {...copyState, loginRedirection: false, goHome: true};

    case 'FETCH_DATA':
      return {...copyState, userInfo: action.userData};

    case 'REDIRECT_LOGIN':
      return {...copyState, loginRedirection: true, goHome: false};

    case 'CHANGE_TEMP_HOBBY':
      return {...copyState, tempHobby: action.ev.target.value};

    case 'UPDATE_HOBBIES':
      return {...copyState, userInfo: {hobbies: action.hobbiesPayload}};

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

const hasFailedAction = () => {
  return { type: 'HAS_FAILED' }
}

export const changeAction = payload => {
  return { type: 'CHANGE', payload: payload }
}

export const requestAction = userData => {
  return { type: 'FETCH_DATA', userData: userData }
}

const redirectToLogin = () => {
  return { type: 'REDIRECT_LOGIN' }
}

export const changeHobbyAction = ev => {
  return { type: 'CHANGE_TEMP_HOBBY', ev: ev }
}

const redirectToHome = () => {
  return { type: 'REDIRECT_HOME' }
}

const pushHobbyAction = hobbiesPayload => {
  return { type: 'UPDATE_HOBBIES', hobbiesPayload: hobbiesPayload }
}

export const loginFetch = credentials => {
  return function(dispatch) {
    fetch('/users/login', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then(res => {
      if (res.status === 400 || res.status === 404) {
        throw new Error('Authentication failed');
      }

      return res.json();
    })
    .then(userData => {
      console.log(userData);
      Auth.login();
      dispatch(requestAction(userData));
      dispatch(redirectToLogin());
    })
    .catch(err => {
      console.warn(err);
      dispatch(hasFailedAction());
    })
  }
}

export const reduxLogout = () => {
  return function(dispatch) {
    fetch('/users/logout')
      .then(res => {
        if (res.status === 400 || res.status === 404) {
          throw new Error('Log out failed');
        }
        return res.json();
      })
      .then(msgData => {
        console.log(msgData);
        dispatch(redirectToHome());
      })
      .catch(err => console.warn(err))
  }
}

export const pushHobbyFunction = hobbyValue => {
  return function(dispatch) {
    fetch('/users/update/hobbies', {
      method: 'put',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({hobbies: hobbyValue})
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      dispatch(pushHobbyAction(data.hobbies));
    })
    .catch(err => console.warn(err))
  }
}

export const store = createStore(authReducer, applyMiddleware(thunk));
