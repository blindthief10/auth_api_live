import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {userNameValue: '', passwordValue: '', infoUser: null, attemptRedirect: false};

const authReducer = (state = initialState, action) => {

  const copyState = {...state};

  switch(action.type) {

    case 'FETCH_DATA':
      return fetch('/users/login', {
        method: 'post',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(userData => {
        console.log(userData);
      })
      .catch(err => console.warn(err))

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

export const requestAction = payload => {
  return {
    type: 'FETCH_DATA',
    payload: payload
  }
}

// Here is a function, Here you make the fetch, and
const requestHandler = payload => {
  return function(dispatch) {
    return
  }
}


export const store = createStore(authReducer, applyMiddleware(thunk));
